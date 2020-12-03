import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GLobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />

      <GLobalStyle />
    </BrowserRouter>
  );
};

export default App;
