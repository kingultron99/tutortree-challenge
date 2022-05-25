import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './css/index.scss'


// gets the root elelemt from the DOM and injects the project

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
