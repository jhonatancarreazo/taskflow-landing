import React, { useState } from "react"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      <div className="nav-container">

        <h2 className="logo">TaskFlow</h2>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <button className="nav-btn">Get Started</button>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </nav>
  )
}

export default Navbar