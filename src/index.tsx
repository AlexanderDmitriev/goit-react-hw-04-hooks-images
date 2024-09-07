import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './components/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if (!root) {
  throw new Error("The element #portal wasn't found");
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
