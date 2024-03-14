import React from 'react'
import NavbarBootstrap from '../components/header/Navbar'
import './login.css'
import rafiLogo from './../assets/rafiLogo.png'

const LoginPage = () => {
  return (
    <div className="login-container">
      <NavbarBootstrap />
      <img style={{ height: '300px', float: 'right' }} src={rafiLogo} alt="rafiLogo" />
    </div>
  )
}

export default LoginPage
