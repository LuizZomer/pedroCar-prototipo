import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index.tsx'
import { createGlobalStyle } from 'styled-components'
import {ProductProvider} from './context/ProductContext.tsx'


import GlobalHeader from './components/GlobalHeader.tsx'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ProductProvider>
    <GlobalHeader />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </ProductProvider>
  </React.StrictMode>,
)
