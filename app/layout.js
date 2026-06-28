import "./globals.css";

export const metadata = {
  title: "Blue Skies Mobile Wash & Home Care",
  description:
    "Premium mobile detailing serving Columbia County and surrounding areas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}