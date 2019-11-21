import React, { useContext } from 'react';
import  { StateContext } from '../context'; 

function QuestionList() {
    const [value, ] = useContext(StateContext);

    const listStyle = {
        listStyleType: 'none',
        padding: '10px'
    }
    return (
        console.log(value),
        <div>
            <ul style={listStyle}>
                {value.map((el, id) => {
                   return (
                   <li key={id}> QUESTION: {el.magic.question} ANSWER: {el.magic.answer}</li>
                   ); 
                })}
            </ul>
        </div>
    )
}

export default QuestionList;