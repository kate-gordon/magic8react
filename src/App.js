import React from 'react';
import EightBall from './components/eight-ball'; 
import QuestionList from './components/questionList'; 
import { StateProvider } from './context/index'; 

import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import './App.css';

function App() {
  const initialState = [];
  
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
    <StateProvider initialState={initialState} reducer={reducer}>
        <h1>A Magic 8Ball</h1>
          <EightBall /> 
          <QuestionList />
    </StateProvider>
    </ThemeProvider>
  );
}

export default App;
