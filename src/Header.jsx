import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        {/* <img src="/logo.png" alt="Logo" /> */}
        <h1 className="header-title">
          Nemeș <span className="bold">Mihail</span>
        </h1>
      </div>

      <nav className="nav-container">
        {/* <ul className="nav-list">
          <li className="nav-item"><a href="#">Home ▼</a></li>
          <li className="nav-item"><a href="#">About</a></li>
          <li className="nav-item"><a href="#">Resume</a></li>
          <li className="nav-item"><a href="#">Portfolio</a></li>
          <li className="nav-item"><a href="#">Contacts</a></li>
        </ul> */}
      </nav>

      <button className="download-button">
        Download CV <span className="download-icon">⬇</span>
      </button>
    </header>
  );
}
