import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Playfair Display', serif;
    background: #f8f8f8;
    color: #1a1a1a;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle />
      <App />
    </HashRouter>
  </React.StrictMode>
)
