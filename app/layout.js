export const metadata = {
  title: "Blue Skies Mobile Wash & Home Care",
  description:
    "Premium mobile detailing serving Columbia County and surrounding areas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#06111f", color: "white" }}>
        {children}
      </body>
    </html>
  );
}