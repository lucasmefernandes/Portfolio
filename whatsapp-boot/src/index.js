import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { NameProvider } from './context/NameContext';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  body {
    
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NameProvider>
    <GlobalStyle />
    <RouterProvider router={router} />
  </NameProvider>
);

