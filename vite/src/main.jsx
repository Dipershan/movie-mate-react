import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App';
import ThemeContext from './context/ThemeContext';
// import AppContext from './context/AppContext.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext>
     <App />
    </ThemeContext>
    
  </React.StrictMode>,
)
