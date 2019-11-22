import React from 'react';
import EightBall from './components/eight-ball'; 
import QuestionList from './components/questionList'; 
import { StateProvider } from './context/index'; 

import { ThemeProvider } from 'emotion-theming'
import { Flex } from 'reflexbox'; 
// import { Heading } from 'rebass'; 
import theme from '@rebass/preset'; 
import './App.css';

function App() {
  const initialState = [];

  const appStyle = {
    display: 'flex', 
    alignItems: 'center'
  }
  
  const reducer = (state, action) => { 
    switch (action.type) {
      case 'addQuestion':
        return [
          ...state,
          action.newQ
        ];
        
      default:
        return state;
    }
  };
  return (
  <ThemeProvider theme={theme}>
    <Flex alignItems='center' flexDirection='column' justifyContent='center'> 
      <StateProvider initialState={initialState} reducer={reducer}>
        <h1>A Magic 8Ball</h1>
          <EightBall /> 
          <QuestionList />
      </StateProvider>
    </Flex> 
  </ThemeProvider>
 
  );
}

export default App;
