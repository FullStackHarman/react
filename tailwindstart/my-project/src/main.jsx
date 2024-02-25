import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cards from './components/Cards.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />,
    <Cards username="Harman" btnText="hello from first"/>,
    <Cards username="Sandeep" btnText="Click for me"/>
  </React.StrictMode>,
)
