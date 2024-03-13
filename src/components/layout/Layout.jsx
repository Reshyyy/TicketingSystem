import React from 'react'
import './../styles/layout.css'

import NavbarBootstrap from '../header/Navbar'
import Footer from '../footer/Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarBootstrap />
      <main className='app-container'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
