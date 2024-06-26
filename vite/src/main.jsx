import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App';
import ThemeContext from './context/ThemeContext';
import {BrowserRouter} from "react-router-dom";
// import AppContext from './context/AppContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext>
    <BrowserRouter >
     <App />
     </BrowserRouter >
    </ThemeContext>
  </React.StrictMode>,
)
