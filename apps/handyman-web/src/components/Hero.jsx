import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content container">
        <p className="hero-tag">Serving Bacchus Marsh &amp; Surrounds Since 2008</p>
        <h1>Your Trusted Local<br />Handyman Service</h1>
        <p className="hero-sub">
          From leaky faucets to full room makeovers — we handle the honey-do list
          so you don't have to. Licensed, insured, and always on time.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
          <a href="#services" className="btn btn-outline">See Our Services</a>
        </div>
      </div>
    </section>
  );
}
