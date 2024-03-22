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
import ViewTicketUser from './pages/ViewTicketUser';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* User */}
        <Route path="/tickets/:ticketID" element={<ViewTicketUser />} />

        {/* <Route path="/dashboard" element={
          isLoggedIn ? <TSDashboard /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />
        } /> */}
        <Route path="/dashboard" element={<TSDashboard />} />
        <Route path="/create" element={<TSCreate />} />
        {/* <Route path="/login" element={<TSLogin />} /> */}
      </Routes>
    </Router>
  )
}

export default App
