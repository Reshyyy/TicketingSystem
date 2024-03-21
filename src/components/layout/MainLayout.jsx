import React from 'react'
import './../styles/layout.css'
import NavbarBootstrap from '../header/NavbarBootstrap'
import Footer from '../footer/Footer'
import rafiBG from './../../assets/rafiBG.png'
import { Image } from 'react-bootstrap'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import './../styles/mainlayout.css'
import NavbarMain from '../header/NavbarMain'
import Sidebar from '../sidebar/Sidebar'
import './../styles/mainlayout.css'

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
      <NavbarMain />
      <main className='main-container d-flex flex-row'>
        <Sidebar />
        <div className='w-100 px-4 bg-color'>{children}</div>
      </main>
      <Footer />
    </ThemeProvider >
  )
}

export default MainLayout
