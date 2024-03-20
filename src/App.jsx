import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TSHome from './pages/TSDashboard';
import TSCreate from './pages/TSCreate';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/sidebar/Sidebar';
import Register from './pages/Register';
import TSDashboard from './pages/TSDashboard';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<TSDashboard />} />
        <Route path="/create" element={<TSCreate />} />
        {/* <Route path="/login" element={<TSLogin />} /> */}

        {/* Test */}
        <Route path="/test" element={<Sidebar />} />
      </Routes>
    </Router>
  )
}

export default App
