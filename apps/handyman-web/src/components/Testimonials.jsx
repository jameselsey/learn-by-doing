import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah T.',
    location: 'Bacchus Marsh, VIC',
    text: 'James fixed our leaky bathroom faucet and patched a hole in the drywall the same afternoon. Super professional and the price was totally fair.',
    stars: 5,
  },
  {
    name: 'Dave R.',
    location: 'Ballan, VIC',
    text: "I've used James's Handyman three times now. He always shows up on time, explains what he's doing, and cleans up after himself. Highly recommend.",
    stars: 5,
  },
  {
    name: 'Linda M.',
    location: 'Melton, VIC',
    text: 'Had a deck that was falling apart. James rebuilt the whole thing in two days. Looks better than when we bought the house!',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What Customers Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it — here's what our neighbors think.
        </p>
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.name} className="testimonial-card">
              <div className="stars">{'★'.repeat(t.stars)}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
