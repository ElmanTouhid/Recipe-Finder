import { StrictMode } from 'react'  //checks your code for errors and warnings, helps you write better code
import { createRoot } from 'react-dom/client'  //connects react to webpage
import './index.css'   //connects css to webpage
import App from './App.jsx'  //connects app.jsx to webpage

createRoot(document.getElementById('root')).render(  //puts app on page, root is the id of the div in index.html
  <StrictMode>
    <App />  
  </StrictMode>,
)
