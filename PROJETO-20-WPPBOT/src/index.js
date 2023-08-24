import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { NameProvider } from './context/NameContext';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NameProvider>
    <GlobalStyle />
    <App />
  </NameProvider>
);

