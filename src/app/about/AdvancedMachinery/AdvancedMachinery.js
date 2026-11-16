import React from 'react';
import styles from './AdvancedMachinery.module.css';

/**
 * AdvancedMachinery component showcases HiBlue's state‑of‑the‑art machinery.
 * It uses an external image URL (Google image search result) – replace with a
 * local asset when available.
 */
export default function AdvancedMachinery() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Advanced Machinery</h2>
      <div className={styles.content}>
        <img
          src="https://example.com/advanced-machinery.jpg"
          alt="HiBlue advanced machinery"
          className={styles.image}
        />
        <p className={styles.text}>
          At HiBlue we use cutting‑edge CNC routers, edge banders and panel
          processing machines to deliver precision‑engineered components. Our
          modular equipment ensures high flexibility and efficiency for a wide
          range of projects.
        </p>
      </div>
    </section>
  );
}
