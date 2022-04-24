import React from 'react';
import './App.css';
import {ThemeProvider} from '@emotion/react';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import TaskMachine from './pages/TaskMachine';

function App() {
  /**
   * 아래 이벤트 핸들러를 넣어주어야 dragend 이벤트가 즉각 발생한다.
   */
  document.addEventListener("dragover", function( event ) {
    event.preventDefault();
  }, false);


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TaskMachine />
    </ThemeProvider>
  );
}

export default App;
