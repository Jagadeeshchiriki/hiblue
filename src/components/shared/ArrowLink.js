import Link from "next/link";
import styles from "./ArrowLink.module.css";

export default function ArrowLink({ href, children, light = false }) {
  return (
    <Link className={`${styles.link} ${light ? styles.light : ""}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
