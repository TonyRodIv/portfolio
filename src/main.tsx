import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/nav.tsx'
import Header from './components/header.tsx'
import Carousel from './components/carousel.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav /> 
    <Header />
    <Carousel />
  </StrictMode>,
)
