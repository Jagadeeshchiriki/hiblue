import "./globals.css";
import "lenis/dist/lenis.css";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans", 
});

export const metadata = {
  title: { default: "HiBlue Interiors", template: "%s | HiBlue" },
  description:
    "Considered interiors, thoughtful materials and beautifully executed spaces.",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={josefinSans.variable}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
