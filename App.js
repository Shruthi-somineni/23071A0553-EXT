
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<h1>Welcome to StudentSys</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

 export default App;


























///push into git
//git init
//git remote add origin https://github.com/yourusername/your-repository-name.git
// git add .
//git commit -m "Initial commit or description of changes"
//git push -u origin master
