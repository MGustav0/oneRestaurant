import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GLobalStyle from './styles/global';

import HookProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <HookProvider>
        <Routes />
      </HookProvider>

      <GLobalStyle />
    </BrowserRouter>
  );
};

export default App;
