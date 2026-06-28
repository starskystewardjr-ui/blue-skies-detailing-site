const squareLink =
  "https://book.squareup.com/appointments/e4u4kj67uec46l/location/L1K4ZCSWWNRA5/services";

const services = [
  {
    tier: "Tier 4",
    title: "Full Detail",
    tag: "Main full-service option",
    text: "Complete interior and exterior detail for customers who want the full Blue Skies standard.",
    prices: "Small $249.99 • Mid $279.99 • Large $299.99",
    featured: true,
  },
  {
    tier: "Tier 3",
    title: "Standard Quick Detail",
    tag: "Fast professional reset",
    text: "A strong interior and exterior reset designed for clean, efficient results.",
    prices: "Small $169.99 • Mid $189.99 • Large $219.99",
  },
  {
    tier: "Tier 2",
    title: "Maintenance Interior & Exterior",
    tag: "For already-clean vehicles",
    text: "Light upkeep for vehicles that do not need a full reset.",
    prices: "Small $89.99–$99.99 • Large $114.99",
  },
  {
    tier: "Tier 1",
    title: "Premium Exterior Wash",
    tag: "Exterior refresh",
    text: "Exterior-only wash service. Minimum booking requirements may apply.",
    prices: "Small $54.99 • Mid $64.99 • Large $74.99",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <strong>Blue Skies</strong>
        <div>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="navButton" href={squareLink} target="_blank">
            Book Now
          </a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">COLUMBIA COUNTY • MOBILE DETAILING</p>
        <h1>Premium Mobile Detailing Delivered To Your Driveway.</h1>
        <p className="heroText">
          Professional mobile detailing with premium products, clean execution,
          and respect for your investment.
        </p>
        <div className="buttons">
          <a className="primary" href={squareLink} target="_blank">
            Book Appointment
          </a>
          <a className="secondary" href="#services">
            View Services
          </a>
        </div>
      </section>

      <section className="trust">
        <div>Professional Equipment</div>
        <div>Premium Chemicals</div>
        <div>Mobile Convenience</div>
        <div>Detail-Focused Execution</div>
      </section>

      <section id="services" className="section">
        <p className="eyebrow">SERVICE PACKAGES</p>
        <h2>Choose the level of care your vehicle needs.</h2>

        <div className="serviceGrid">
          {services.map((service) => (
            <div
              key={service.tier}
              className={service.featured ? "card featured" : "card"}
            >
              {service.featured && <span className="badge">Recommended</span>}
              <p className="tier">{service.tier}</p>
              <h3>{service.title}</h3>
              <p className="tag">{service.tag}</p>
              <p>{service.text}</p>
              <strong>{service.prices}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">WHY BLUE SKIES</p>
          <h2>Built for customers who care about their vehicle.</h2>
        </div>
        <p>
          Blue Skies Mobile Wash & Home Care brings professional detailing
          directly to your driveway across Columbia County and surrounding
          areas. The goal is simple: clean work, serious care, and a service
          experience that feels premium from first contact to final result.
        </p>
      </section>

      <section id="about" className="section about">
        <p className="eyebrow">ABOUT THE FOUNDER</p>
        <h2>Founded by Starsky Steward.</h2>
        <p>
          Blue Skies was built on care, dedication, and professionalism. The
          company exists to deliver a higher standard of mobile detailing
          without shortcuts, excuses, or careless work.
        </p>
      </section>

      <section id="contact" className="section contact">
        <h2>Ready to book professional mobile detailing?</h2>
        <p>Call 570-912-5307 or email info.blueskiesmobilewash@gmail.com.</p>
        <a className="primary" href={squareLink} target="_blank">
          Book Appointment
        </a>
      </section>

      <footer>
        <p>Blue Skies Mobile Wash & Home Care</p>
        <p>Founded by Starsky Steward</p>
      </footer>
    </main>
  );
}