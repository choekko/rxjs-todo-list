import React from 'react';
import './App.css';
import {ThemeProvider} from '@emotion/react';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import TaskMachine from './pages/TaskMachine';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TaskMachine />
    </ThemeProvider>
  );
}

export default App;
