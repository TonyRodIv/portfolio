import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/nav.tsx'
import Header from './components/header.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav /> 
    <Header />
  </StrictMode>,
)
