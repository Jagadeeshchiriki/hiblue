import Image from "next/image";
import manufacturingImage from "../../../public/images/home/philosophy-manufacturing.png";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section
      className={styles.section}
      aria-labelledby="philosophy-title"
      data-philosophy
      data-header-theme="light"
    >
      <div className={styles.copy} data-philosophy-copy>
        <h2 id="philosophy-title">
          Engineered to Build
          <br />
          Crafted to Last
        </h2>
        <p>
          From cutting and edge banding to assembly and finishing, our skilled
          team combines modern machinery and craftsmanship to turn client-provided
          designs into high-quality modular solutions.
        </p>
      </div>
      <div className={styles.image} data-philosophy-image>
        <Image
          src={manufacturingImage}
          alt="Skilled craftspeople manufacturing modular furniture in a modern workshop"
          fill
          sizes="100vw"
          data-parallax
        />
      </div>
    </section>
  );
}
