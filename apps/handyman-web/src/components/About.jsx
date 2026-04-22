import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
            alt="James the handyman at work"
          />
        </div>
        <div className="about-text">
          <p className="hero-tag" style={{ color: '#e86c2f', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.9rem' }}>
            About Us
          </p>
          <h2>Over 15 Years of Honest,<br />Dependable Work</h2>
          <p>
            Hi, I'm James Callahan. I started this business in 2008 with a simple idea:
            treat every home like it's my own. No upselling, no surprise charges — just
            quality work done right the first time.
          </p>
          <p>
            I'm fully insured and based right here in Bacchus Marsh, VIC. I bring the same
            attention to detail to a $50 faucet fix as I do to a full bathroom renovation.
          </p>
          <ul className="about-list">
            <li>✅ Licensed &amp; Insured</li>
            <li>✅ Free estimates on all jobs</li>
            <li>✅ Same-week appointments available</li>
            <li>✅ 100% satisfaction guarantee</li>
          </ul>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: 24 }}>
            Book a Visit
          </a>
        </div>
      </div>
    </section>
  );
}
