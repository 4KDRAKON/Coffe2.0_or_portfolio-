import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './Components/Context/context';
import { Provider as Theme } from './Components/Context/theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Theme>
   <Provider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
   </Theme>
  </React.StrictMode>
);


