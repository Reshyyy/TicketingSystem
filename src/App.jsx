import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TSHome from './pages/TSHome';
import TSCreate from './pages/TSCreate';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/sidebar/Sidebar';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<TSHome />} />
        <Route path="/create" element={<TSCreate />} />

        {/* Test */}
        <Route path="/test" element={<Sidebar />} />
      </Routes>
    </Router>
  )
}

export default App
