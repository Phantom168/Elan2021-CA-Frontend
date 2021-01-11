import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from '@chakra-ui/react';
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="phantom168.us.auth0.com"
    clientId="0bA91Ra1cZ1Ek2mn0NC8JBYoCDBe6qaO"
    redirectUri={window.location.origin}
  >
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  </Auth0Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
