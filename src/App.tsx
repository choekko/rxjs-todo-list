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

  // Q: store를 여기에 정의하면 업무 저장이 두 번씩 되는 등의 이상한 현상이 생김. 이유가 뭘까?
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TaskMachine />
      </ThemeProvider>
  );
}

export default App;
