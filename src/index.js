import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import 'jquery/dist/jquery.min.js';
import './index.css';
import { HashRouter } from 'react-router-dom';
import LangContextProvider from './componants/context/store';
import { CartProvider } from 'react-use-cart';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  // <React.StrictMode>
    <HashRouter>
      <LangContextProvider>
        <CartProvider>
            <App />
        </CartProvider>
      </LangContextProvider>
    </HashRouter>
  // </React.StrictMode>
);



// reportWebVitals();
