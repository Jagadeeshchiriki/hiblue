import "./globals.css";
import "lenis/dist/lenis.css";
export const metadata = {
  title: { default: "HiBlue Interiors", template: "%s | HiBlue" },
  description:
    "Considered interiors, thoughtful materials and beautifully executed spaces.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
