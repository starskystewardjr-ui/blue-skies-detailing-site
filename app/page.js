export default function Home() {
  const squareLink =
    "https://book.squareup.com/appointments/e4u4kj67uec46l/location/L1K4ZCSWWNRA5/services";

  return (
    <main>
      <section
        style={{
          padding: "100px 30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#60A5FA",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          COLUMBIA COUNTY • MOBILE DETAILING
        </p>

        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px",
          }}
        >
          Premium Mobile Detailing
          <br />
          Delivered To Your Driveway.
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "700px",
            color: "#cbd5e1",
          }}
        >
          Blue Skies Mobile Wash & Home Care provides professional mobile
          detailing with premium products, professional execution, and respect
          for your investment.
        </p>

        <br />

        <a
          href={squareLink}
          target="_blank"
          style={{
            background: "#2563EB",
            padding: "16px 28px",
            borderRadius: "12px",
            display: "inline-block",
            fontWeight: "bold",
          }}
        >
          Book Appointment
        </a>
      </section>
    </main>
  );
}