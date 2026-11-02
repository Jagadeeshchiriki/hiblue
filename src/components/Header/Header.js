"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import logoMark from "../../../public/images/logo1.png";
import styles from "./Header.module.css";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Products", "/products"],
  ["Process", "/process"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div className={styles.logoMark} aria-hidden="true" data-site-logo>
        <Image
          src={logoMark}
          alt=""
          width={1262}
          height={1246}
          sizes="(max-width: 650px) 42px, 52px"
          preload
        />
      </div>
      <header
        className={`${styles.header} ${open ? styles.menuOpen : ""}`}
        data-site-header
      >
        <Link className={styles.logo} href="/" aria-label="HiBlue home">
          <span className={styles.brandText}>
            <strong>HIBLUE</strong>
            <small>MODULAR INDUSTRIES LLP</small>
          </span>
        </Link>
        <button
          className={`${styles.menuButton} ${open ? styles.active : ""}`}
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <div
          className={`${styles.overlay} ${open ? styles.open : ""}`}
          aria-hidden={!open}
          id={menuId}
        >
          <div className={styles.menuMeta}>Navigate / HiBlue</div>
          <nav className={styles.nav} aria-label="Primary navigation">
            {links.map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
              >
                <span>0{index + 1}</span>
                {label}
              </Link>
            ))}
          </nav>
          <p className={styles.menuFooter}>
            Thoughtful design. Beautifully executed spaces.
          </p>
        </div>
      </header>
    </>
  );
}
