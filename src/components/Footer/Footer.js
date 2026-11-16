import Image from "next/image";
import Link from "next/link";
import footerImage from "../../../public/images/home/artisan-1.webp";
import styles from "./Footer.module.css";

const corporateLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Contact", "/contact"],
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v.01M12 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".75" className={styles.iconFill} />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <>
        <path d="M21 12c0-2.2-.3-4.1-.7-5-.3-.7-.9-1.2-1.6-1.4C17.3 5.2 14.8 5 12 5s-5.3.2-6.7.6C4.6 5.8 4 6.3 3.7 7 3.3 7.9 3 9.8 3 12s.3 4.1.7 5c.3.7.9 1.2 1.6 1.4 1.4.4 3.9.6 6.7.6s5.3-.2 6.7-.6c.7-.2 1.3-.7 1.6-1.4.4-.9.7-2.8.7-5Z" />
        <path d="m10 9 5 3-5 3Z" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.details}>
            <div className={styles.addressBlock}>
              <h2>Our Location</h2>
              <address>
                D.No. 7-90, Dasari Lingaiah Estate, Kodavali Street,
                <br />
                Opp. Decathlon, Near SRK College, Enikepadu,
                <br />
                Vijayawada – 521108.
              </address>
            </div>

            <div className={styles.contact}>
              <h2>Contact</h2>
              <a href="mailto:hibluemodular@gmail.com">
                hibluemodular@gmail.com
              </a>
              <a href="tel:+919121215403">+91 91212 15403</a>
            </div>
          </div>

          <div className={styles.brandLockup}>
            <div className={styles.brandImage}>
              <Image
                src={footerImage}
                alt="HiBlue modular kitchen interior"
                fill
                sizes="(max-width: 700px) 45vw, 22vw"
              />
            </div>
            <Link className={styles.wordmark} href="/" aria-label="HiBlue home">
              HIBLUE
            </Link>
          </div>

          <div className={styles.bottomBar}>
            <small>
              © 2026 Hi Blue Modular Industries LLP. All rights reserved.
            </small>
            <div className={styles.socials} aria-label="Social media links">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  href={href}
                  key={label}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <nav className={styles.navigation} aria-label="Footer navigation">
          {corporateLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
