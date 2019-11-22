import React, { useState, useContext } from 'react'; 
import  { StateContext } from '../context'; 
import loadData from '../utils/loadData'; 

import { Button, Box } from 'rebass';

import { Input } from '@rebass/forms'; 

function EightBall() {
    const [ , dispatch] = useContext(StateContext);
    const [ , setResponse] =useState(''); 
    const [question, setQuestion] =useState(''); 

    async function fetchBallResponse(question) {
        let params = encodeURIComponent(`${question}`);
        let uri = "https://8ball.delegator.com/magic/JSON/" + params;
        const response = await loadData(uri);
        return response
      };

      const handleNewQuestion = newQ =>{ 
        dispatch({
            type: 'addQuestion', 
            newQ
        });
        setResponse(''); 
    };


      const handleChange = e => {
        e.preventDefault();  
        setQuestion(e.target.value)
          
      }

      const handleClick = async e => {
          e.preventDefault();
          const newQ = await fetchBallResponse(question);
       
          setResponse(newQ); 
          handleNewQuestion(newQ); 
          setQuestion('');  
      }

      
    return (
 
      <Box width={1/3} px={3} bg='#24232b' p={5} color='white'>
         <form onSubmit={handleClick}>
            <Input 
            type="text" 
            name="question"
            placeholder="AMA"
            value={question}
            onChange={handleChange}
            > 
            </Input>
            <Button 
                variant='secondary'
                sx={{
                  p: 4, 
                  borderRadius: 50,
                  ':hover': {
                    backgroundColor: 'tomato',
                  }
                }} 
                type="submit" 
                value="Submit">Ask
            </Button>
        </form>
      </Box>
   
    )
}


export default EightBall;