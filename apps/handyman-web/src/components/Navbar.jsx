import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ['Services', 'About', 'Testimonials', 'Contact'];

  return (
    <nav className="navbar">
      <div className="nav-inner container">
        <a href="#home" className="nav-logo">
          🔧 <span>James's Handyman</span>
        </a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
                {link}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
