import React from "react";
import "./App.css";

export default function App() {
  return (
    <title> Test Title </title>
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">MyBrand</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Build Something Amazing</h2>

          <p>
            A clean and modern React landing page template to kickstart your
            next project.
          </p>

          <button className="cta-btn">Get Started</button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3>Fast</h3>
          <p>Optimized for speed and performance.</p>
        </div>

        <div className="feature-card">
          <h3>Responsive</h3>
          <p>Looks great on desktop, tablet, and mobile.</p>
        </div>

        <div className="feature-card">
          <h3>Simple</h3>
          <p>Easy to customize and expand.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}
