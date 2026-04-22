import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Static site — no backend. Wire up to Formspree, Netlify Forms, etc.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Ready to get started? Fill out the form and we'll get back to you within
            one business day with a free estimate.
          </p>
          <ul className="contact-details">
            <li>📞 <a href="tel:+610400000000">0400 000 000</a></li>
            <li>✉️ <a href="mailto:james@jameshandyman.com.au">james@jameshandyman.com.au</a></li>
            <li>📍 Bacchus Marsh, VIC &amp; surrounding areas</li>
            <li>🕐 Mon–Sat, 7am–6pm</li>
          </ul>
        </div>

        <div className="contact-form-wrap">
          {submitted ? (
            <div className="form-success">
              <p>✅ Thanks! We'll be in touch soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (optional)"
                value={form.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Describe the job..."
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
