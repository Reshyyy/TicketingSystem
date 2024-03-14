import React from 'react'
import Layout from '../components/layout/Layout'
import rafi from './../assets/rafi.png'
import { Image } from 'react-bootstrap'

const Home = () => {
  return (
    <Layout>
      {/* <Image sx={{ backgroundPosition: 'center', position: 'sticky' }} src={rafi} style={{ backgroundImage: `url(${rafi})` }} /> */}
      <h1 className='h1'>Welcome to Our Home Page</h1>
      <p>This is the content of your home page.</p>
    </Layout>
  )
}

export default Home
