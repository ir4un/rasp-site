import './App.css';
import React from 'react';
import Landing from './component/landing-page/Landing';
import TopBar from './component/default/TopBar';

import { Button, Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <TopBar />
        <Container className="main-content">
          <Landing />
        </Container>
      </body>
    </div>
  );
}

export default App;
