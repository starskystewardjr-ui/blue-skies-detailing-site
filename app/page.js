const squareLink =
  "https://book.squareup.com/appointments/e4u4kj67uec46l/location/L1K4ZCSWWNRA5/services";

const phone = "570-912-5307";
const email = "info.blueskiesmobilewash@gmail.com";

const services = [
  {
    tier: "Tier 4",
    name: "Full Detail",
    label: "Recommended",
    description:
      "The general full-service Blue Skies option. Complete interior and exterior care for customers who want the full result, not just a quick clean.",
    prices: ["Small $249.99", "Mid $279.99", "Large $299.99"],
    time: "4–4.5 hours",
    featured: true,
  },
  {
    tier: "Tier 3",
    name: "Standard Quick Detail",
    label: "Fast Reset",
    description:
      "A strong professional reset for customers who want efficient interior and exterior detailing without the full restoration-level appointment.",
    prices: ["Small $169.99", "Mid $189.99", "Large $219.99"],
    time: "2.5–3.25 hours",
  },
  {
    tier: "Tier 2",
    name: "Maintenance Interior & Exterior",
    label: "Upkeep",
    description:
      "A maintenance option for vehicles that are already in decent condition and need consistent upkeep.",
    prices: ["Small $89.99–$99.99", "Large $114.99"],
    time: "1–1.25 hours",
  },
  {
    tier: "Tier 1",
    name: "Premium Exterior Wash",
    label: "Exterior Only",
    description:
      "A premium exterior refresh. Single Tier 1 bookings may require a minimum booking threshold.",
    prices: ["Small $54.99", "Mid $64.99", "Large $74.99"],
    time: "45–75 minutes",
  },
];

const addOns = [
  "Ceramic Sealant — $74.99 / 12-month protection",
  "Pet Hair Removal — 30 minutes / price varies",
];

export default function Home() {
  return (
    <main style={styles.page}>
      <nav style={styles.nav}>
        <a href="#" style={styles.brand}>
          <span style={styles.brandMark}>BS</span>
          <span>
            Blue Skies
            <small style={styles.brandSub}>Mobile Wash & Home Care</small>
          </span>
        </a>

        <div style={styles.navLinks}>
          <a href="#services" style={styles.navLink}>
            Services
          </a>
          <a href="#gallery" style={styles.navLink}>
            Gallery
          </a>
          <a href="#about" style={styles.navLink}>
            About
          </a>
          <a href="#contact" style={styles.navButton}>
            Contact
          </a>
        </div>
      </nav>

      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <p style={styles.eyebrow}>COLUMBIA COUNTY • MOBILE DETAILING</p>
          <h1 style={styles.h1}>
            Luxury Results.
            <br />
            Right At Your Home.
          </h1>
          <p style={styles.heroText}>
            Blue Skies Mobile Wash & Home Care delivers premium mobile detailing
            with professional execution, premium products, and respect for your
            investment.
          </p>

          <div style={styles.buttonRow}>
            <a href={squareLink} target="_blank" style={styles.primaryButton}>
              Book Appointment
            </a>
            <a href="#services" style={styles.secondaryButton}>
              View Services
            </a>
          </div>

          <div style={styles.quickStats}>
            <div>
              <strong style={styles.statNumber}>4</strong>
              <span style={styles.statLabel}>Detail tiers</span>
            </div>
            <div>
              <strong style={styles.statNumber}>3</strong>
              <span style={styles.statLabel}>Vehicle sizes</span>
            </div>
            <div>
              <strong style={styles.statNumber}>100%</strong>
              <span style={styles.statLabel}>Mobile convenience</span>
            </div>
          </div>
        </div>

        <div style={styles.heroCard}>
          <p style={styles.cardEyebrow}>BUILT FOR DRIVEWAYS</p>
          <h2 style={styles.heroCardTitle}>Professional care without leaving home.</h2>
          <p style={styles.muted}>
            Designed for busy owners, luxury vehicles, daily drivers, trucks,
            SUVs, and anyone who wants their vehicle handled with serious care.
          </p>
          <div style={styles.heroVisual}>
            <span style={styles.visualText}>Mobile Setup / Raptor Photo</span>
          </div>
        </div>
      </section>

      <section style={styles.trustStrip}>
        <div style={styles.trustItem}>Professional Equipment</div>
        <div style={styles.trustItem}>Premium Chemicals</div>
        <div style={styles.trustItem}>Mobile Convenience</div>
        <div style={styles.trustItem}>Detail-Focused Execution</div>
      </section>

      <section id="services" style={styles.section}>
        <div style={styles.sectionHeader}>
          <p style={styles.eyebrow}>SERVICE PACKAGES</p>
          <h2 style={styles.h2}>Choose the level of care your vehicle needs.</h2>
          <p style={styles.sectionText}>
            Tier 4 is the main full option. Tier 3 is the standard quick detail.
            Tier 1 and Tier 2 are best for maintenance and lighter needs.
          </p>
        </div>

        <div style={styles.serviceGrid}>
          {services.map((service) => (
            <article
              key={service.tier}
              style={{
                ...styles.serviceCard,
                ...(service.featured ? styles.featuredCard : {}),
              }}
            >
              <div style={styles.cardTop}>
                <span style={styles.tier}>{service.tier}</span>
                <span
                  style={{
                    ...styles.label,
                    ...(service.featured ? styles.featuredLabel : {}),
                  }}
                >
                  {service.label}
                </span>
              </div>

              <h3 style={styles.h3}>{service.name}</h3>
              <p style={styles.cardText}>{service.description}</p>

              <div style={styles.priceList}>
                {service.prices.map((price) => (
                  <span key={price} style={styles.pricePill}>
                    {price}
                  </span>
                ))}
              </div>

              <p style={styles.time}>Estimated time: {service.time}</p>
            </article>
          ))}
        </div>

        <div style={styles.addOnBox}>
          <h3 style={styles.h3}>Available Add-ons</h3>
          {addOns.map((item) => (
            <p key={item} style={styles.cardText}>
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="gallery" style={styles.sectionAlt}>
        <div style={styles.sectionHeader}>
          <p style={styles.eyebrow}>GALLERY</p>
          <h2 style={styles.h2}>Proof belongs on the page.</h2>
          <p style={styles.sectionText}>
            Add your best Raptor setup photo, foam cannon shot, clean exterior,
            interior result, wheels and tires, and before-and-after photos here.
          </p>
        </div>

        <div style={styles.galleryGrid}>
          {[
            "Raptor / Mobile Setup",
            "Foam Cannon Action",
            "Clean Exterior",
            "Interior Detail",
            "Wheels & Tires",
            "Before / After",
          ].map((item) => (
            <div key={item} style={styles.galleryBox}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={styles.splitSection}>
        <div>
          <p style={styles.eyebrow}>ABOUT BLUE SKIES</p>
          <h2 style={styles.h2}>Professionalism first. Story second.</h2>
        </div>
        <div>
          <p style={styles.largeText}>
            Blue Skies Mobile Wash & Home Care exists to bring a higher standard
            of mobile detailing to Columbia County and surrounding areas.
          </p>
          <p style={styles.sectionText}>
            The brand is built on care, dedication, and professionalism. The
            goal is not just to wash cars — it is to deliver a service
            experience that feels organized, serious, and worth trusting.
          </p>
          <p style={styles.founderLine}>Founded by Starsky Steward.</p>
        </div>
      </section>

      <section id="contact" style={styles.ctaSection}>
        <p style={styles.eyebrow}>READY WHEN YOU ARE</p>
        <h2 style={styles.h2}>Your vehicle deserves professional care.</h2>
        <p style={styles.sectionText}>
          Book online through Square, or contact Blue Skies directly.
        </p>

        <div style={styles.buttonRowCenter}>
          <a href={squareLink} target="_blank" style={styles.primaryButton}>
            Book Appointment
          </a>
          <a href={`tel:${phone}`} style={styles.secondaryButton}>
            Call {phone}
          </a>
        </div>

        <p style={styles.contactText}>{email}</p>
      </section>

      <footer style={styles.footer}>
        <p>Blue Skies Mobile Wash & Home Care</p>
        <p>Founded by Starsky Steward</p>
      </footer>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(37,99,235,.28), transparent 32%), linear-gradient(180deg, #06111f 0%, #08182f 45%, #020617 100%)",
    color: "white",
    fontFamily:
      "Arial, Helvetica, sans-serif",
  },
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    padding: "18px 7%",
    background: "rgba(6, 17, 31, 0.82)",
    borderBottom: "1px solid rgba(255,255,255,.08)",
    backdropFilter: "blur(14px)",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontWeight: 900,
    letterSpacing: ".2px",
  },
  brandMark: {
    width: 42,
    height: 42,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg, #38bdf8, #2563eb)",
    color: "#031022",
    fontWeight: 900,
  },
  brandSub: {
    display: "block",
    fontSize: 11,
    color: "#93c5fd",
    marginTop: 2,
    fontWeight: 700,
  },
  navLinks: {
    display: "flex",
    gap: 18,
    alignItems: "center",
    flexWrap: "wrap",
  },
  navLink: {
    color: "#cbd5e1",
    fontSize: 14,
    fontWeight: 800,
  },
  navButton: {
    color: "#06111f",
    background: "#e0f2fe",
    padding: "10px 16px",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 900,
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1.1fr .9fr",
    gap: 42,
    alignItems: "center",
    padding: "88px 7% 70px",
    maxWidth: 1350,
    margin: "0 auto",
  },
  heroContent: {
    maxWidth: 760,
  },
  eyebrow: {
    color: "#38bdf8",
    fontWeight: 900,
    letterSpacing: 1.6,
    fontSize: 13,
    marginBottom: 14,
  },
  h1: {
    fontSize: "clamp(52px, 8vw, 92px)",
    lineHeight: .9,
    letterSpacing: "-3px",
    margin: "0 0 22px",
  },
  heroText: {
    fontSize: 21,
    lineHeight: 1.55,
    color: "#cbd5e1",
    maxWidth: 680,
  },
  buttonRow: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    marginTop: 30,
  },
  buttonRowCenter: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30,
  },
  primaryButton: {
    background: "linear-gradient(135deg, #38bdf8, #2563eb)",
    color: "white",
    padding: "15px 22px",
    borderRadius: 14,
    fontWeight: 900,
    boxShadow: "0 18px 45px rgba(37,99,235,.3)",
  },
  secondaryButton: {
    border: "1px solid rgba(255,255,255,.22)",
    color: "white",
    padding: "15px 22px",
    borderRadius: 14,
    fontWeight: 900,
    background: "rgba(255,255,255,.04)",
  },
  quickStats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 12,
    marginTop: 42,
    maxWidth: 620,
  },
  statNumber: {
    display: "block",
    fontSize: 30,
  },
  statLabel: {
    color: "#93c5fd",
    fontSize: 13,
    fontWeight: 800,
  },
  heroCard: {
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: 30,
    padding: 28,
    background: "linear-gradient(180deg, rgba(255,255,255,.09), rgba(255,255,255,.04))",
    boxShadow: "0 30px 100px rgba(0,0,0,.35)",
  },
  cardEyebrow: {
    color: "#93c5fd",
    fontWeight: 900,
    fontSize: 12,
    letterSpacing: 1.4,
  },
  heroCardTitle: {
    fontSize: 34,
    lineHeight: 1,
    margin: "12px 0",
  },
  muted: {
    color: "#cbd5e1",
    lineHeight: 1.55,
  },
  heroVisual: {
    height: 260,
    borderRadius: 24,
    marginTop: 24,
    display: "grid",
    placeItems: "center",
    background:
      "linear-gradient(135deg, rgba(56,189,248,.28), rgba(37,99,235,.1)), repeating-linear-gradient(45deg, rgba(255,255,255,.04) 0 12px, transparent 12px 24px)",
    border: "1px solid rgba(255,255,255,.12)",
  },
  visualText: {
    color: "#dbeafe",
    fontWeight: 900,
  },
  trustStrip: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    borderTop: "1px solid rgba(255,255,255,.08)",
    borderBottom: "1px solid rgba(255,255,255,.08)",
    background: "rgba(255,255,255,.03)",
  },
  trustItem: {
    padding: 24,
    textAlign: "center",
    color: "#dbeafe",
    fontWeight: 900,
  },
  section: {
    padding: "92px 7%",
    maxWidth: 1350,
    margin: "0 auto",
  },
  sectionAlt: {
    padding: "92px 7%",
    background: "rgba(255,255,255,.035)",
  },
  sectionHeader: {
    maxWidth: 780,
    marginBottom: 36,
  },
  h2: {
    fontSize: "clamp(36px, 5vw, 58px)",
    lineHeight: .95,
    letterSpacing: "-1.5px",
    margin: "0 0 16px",
  },
  sectionText: {
    color: "#cbd5e1",
    fontSize: 18,
    lineHeight: 1.6,
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 20,
  },
  serviceCard: {
    padding: 28,
    borderRadius: 26,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.055)",
  },
  featuredCard: {
    border: "2px solid #38bdf8",
    background:
      "linear-gradient(135deg, rgba(37,99,235,.36), rgba(255,255,255,.07))",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
  },
  tier: {
    color: "#60a5fa",
    fontWeight: 900,
  },
  label: {
    padding: "7px 11px",
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    color: "#cbd5e1",
    fontSize: 12,
    fontWeight: 900,
  },
  featuredLabel: {
    background: "#38bdf8",
    color: "#06111f",
  },
  h3: {
    fontSize: 27,
    margin: "14px 0 8px",
  },
  cardText: {
    color: "#cbd5e1",
    lineHeight: 1.55,
  },
  priceList: {
    display: "flex",
    flexWrap: "wrap",
    gap: 9,
    marginTop: 18,
  },
  pricePill: {
    padding: "9px 11px",
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    color: "#e0f2fe",
    fontWeight: 900,
    fontSize: 13,
  },
  time: {
    color: "#93c5fd",
    fontWeight: 800,
    marginTop: 18,
  },
  addOnBox: {
    marginTop: 22,
    padding: 28,
    borderRadius: 26,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.04)",
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 18,
    maxWidth: 1350,
    margin: "0 auto",
  },
  galleryBox: {
    height: 190,
    borderRadius: 24,
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(255,255,255,.12)",
    background:
      "linear-gradient(135deg, rgba(56,189,248,.14), rgba(255,255,255,.04))",
    color: "#dbeafe",
    fontWeight: 900,
    textAlign: "center",
    padding: 20,
  },
  splitSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 46,
    padding: "92px 7%",
    maxWidth: 1350,
    margin: "0 auto",
    alignItems: "start",
  },
  largeText: {
    fontSize: 24,
    lineHeight: 1.35,
    fontWeight: 800,
  },
  founderLine: {
    marginTop: 24,
    color: "#38bdf8",
    fontWeight: 900,
    fontSize: 22,
  },
  ctaSection: {
    padding: "92px 7%",
    textAlign: "center",
    maxWidth: 900,
    margin: "0 auto",
  },
  contactText: {
    color: "#93c5fd",
    fontWeight: 900,
    marginTop: 24,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    padding: "34px 7%",
    color: "#cbd5e1",
    borderTop: "1px solid rgba(255,255,255,.08)",
  },
};