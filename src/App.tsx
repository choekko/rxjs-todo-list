import React from 'react';
import './App.css';
import Task from './pages/Task';
import {ThemeProvider} from '@emotion/react';
import theme from './styles/theme';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Task/>
    </ThemeProvider>
  );
}

export default App;
