"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import logoMark from "../../../public/images/hiblue-mark.png";
import styles from "./Header.module.css";

const links = [
  {
    label: "Home",
    href: "/",
    image: "/images/home/06-project-living-room.jpg",
  },
  {
    label: "About",
    href: "/about",
    image: "/images/home/02-about-interior.png",
  },
  {
    label: "Services",
    href: "/services",
    image: "/images/home/04-service-interior-design.jpg",
  },
  {
    label: "Contact",
    href: "/contact",
    image: "/images/home/09-cta-bg.jpg",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const menuId = useId();
  const menuPreview = useRef(null);

  const moveMenuPreview = (event) => {
    if (event.pointerType === "touch" || !menuPreview.current) return;

    menuPreview.current.style.setProperty(
      "--menu-image-x",
      `${event.clientX}px`,
    );
    menuPreview.current.style.setProperty(
      "--menu-image-y",
      `${event.clientY}px`,
    );
  };

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = open ? "hidden" : previousBodyOverflow;
    document.documentElement.style.overflow = open
      ? "hidden"
      : previousHtmlOverflow;
    window.dispatchEvent(
      new CustomEvent("site-menu-change", { detail: { open } }),
    );

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      setActiveLink(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frame = null;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const distance = currentScrollY - lastScrollY;

      if (!open) {
        if (currentScrollY <= 16 || distance < -6) {
          setHidden(false);
        } else if (distance > 6) {
          setHidden(true);
        }
      }

      if (Math.abs(distance) > 6 || currentScrollY <= 16) {
        lastScrollY = currentScrollY;
      }

      frame = null;
    };

    const onScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(updateHeader);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [open]);

  return (
    <>
      <div
        className={`${styles.logoMark} ${hidden ? styles.hidden : ""}`}
        aria-hidden="true"
        data-site-logo
      >
        <Image
          src={logoMark}
          alt=""
          sizes="(max-width: 650px) 48px, 60px"
          preload
        />
      </div>
      <header
        className={`${styles.header} ${open ? styles.menuOpen : ""} ${
          hidden ? styles.hidden : ""
        }`}
        data-site-header
      >
        <Link
          className={styles.logo}
          href="/"
          aria-label="Hi Blue Modular Industries LLP home"
        >
          <span className={styles.brandText}>
            <strong>
              <span>HIBLUE MODULAR</span>
              <span>INDUSTRIES LLP</span>
            </strong>
            <small>
              <span>DESIGN</span>
              <i aria-hidden="true" />
              <span>MANFACTURE</span>
              <i aria-hidden="true" />
              <span>DELIVER</span>
            </small>
          </span>
        </Link>
        <button
          className={`${styles.menuButton} ${open ? styles.active : ""}`}
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => {
            setHidden(false);
            if (open) setActiveLink(null);
            setOpen((value) => !value);
          }}
        >
          <span />
          <span />
        </button>
      </header>
      <div
        className={`${styles.overlay} ${open ? styles.open : ""}`}
        aria-hidden={!open}
        id={menuId}
        onPointerMove={moveMenuPreview}
      >
        <nav
          className={styles.nav}
          aria-label="Primary navigation"
          onPointerLeave={() => setActiveLink(null)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setActiveLink(null);
            }
          }}
        >
          {links.map(({ label, href, image }, index) => (
            <Link
              key={href}
              className={styles.navLink}
              href={href}
              tabIndex={open ? 0 : -1}
              onPointerEnter={() => setActiveLink(index)}
              onFocus={() => setActiveLink(index)}
              onClick={() => {
                setOpen(false);
                setActiveLink(null);
              }}
            >
              <span className={styles.navLabel}>{label}</span>
            </Link>
          ))}
        </nav>
        <div className={styles.menuPreview} ref={menuPreview} aria-hidden="true">
          {links.map(({ label, image }, index) => (
            <div
              className={`${styles.previewImage} ${
                activeLink === index ? styles.previewImageActive : ""
              }`}
              key={image}
            >
              <Image src={image} alt="" fill sizes="24rem" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
