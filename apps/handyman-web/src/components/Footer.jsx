import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span>🔧 James's Handyman Services</span>
          <p>Bacchus Marsh, VIC &amp; surrounding areas</p>
        </div>
        <nav className="footer-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="footer-copy">© {new Date().getFullYear()} James's Handyman Services. All rights reserved.</p>
      </div>
    </footer>
  );
}
