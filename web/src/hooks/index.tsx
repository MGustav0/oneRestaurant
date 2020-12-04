import React from 'react';

import { ToastProvider } from './toast';

const HookProvider: React.FC = ({ children }) => (
  <ToastProvider>{children}</ToastProvider>
);

export default HookProvider;
