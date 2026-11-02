import Link from "next/link";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <strong>HIBLUE</strong>
        <p>
          Thoughtful design.
          <br />
          Beautifully executed spaces.
        </p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/products">Materials</Link>
        <Link href="/process">Process</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className={styles.contact}>
        <p>Have a project in mind?</p>
        <Link href="/contact">Start a conversation ↗</Link>
      </div>
      <small>© 2026 HiBlue. All rights reserved.</small>
      <div className={styles.legal}>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
}
