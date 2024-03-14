import React from 'react'
import './../styles/layout.css'
import NavbarBootstrap from '../header/Navbar'
import Footer from '../footer/Footer'
import rafiBG from './../../assets/rafiBG.png'
import { Image } from 'react-bootstrap'
import ThemeProvider from 'react-bootstrap/ThemeProvider'

const Layout = ({ children }) => {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
      <NavbarBootstrap />
      <main className='app-container'>
        {children}
      </main>
      <Footer />
    </ThemeProvider >
  )
}

export default Layout
