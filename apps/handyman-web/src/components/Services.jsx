import './Services.css';

const services = [
  {
    icon: '🔧',
    title: 'Plumbing Repairs',
    desc: 'Leaky faucets, running toilets, pipe repairs, and fixture installations. No job too small.',
  },
  {
    icon: '🌿',
    title: 'Garden Maintenance',
    desc: 'Lawn mowing, hedge trimming, garden tidy-ups, and rubbish removal. Keep your yard looking its best year-round.',
  },
  {
    icon: '🪟',
    title: 'Door & Window Repair',
    desc: 'Sticking doors, broken locks, window seals, and screen replacements.',
  },
  {
    icon: '🎨',
    title: 'Painting & Drywall',
    desc: 'Interior painting, drywall patching, texture matching, and trim work.',
  },
  {
    icon: '🪵',
    title: 'Carpentry & Decks',
    desc: 'Deck repairs, fence installation, shelving, and custom woodwork.',
  },
  {
    icon: '🏠',
    title: 'General Maintenance',
    desc: 'Gutter cleaning, caulking, weatherstripping, and seasonal home prep.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">
          Reliable repairs and improvements for every corner of your home.
        </p>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.title} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
