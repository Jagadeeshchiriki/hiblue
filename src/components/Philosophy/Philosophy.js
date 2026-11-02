import Image from "next/image";
import interiorImage from "../../../public/images/home/service-interior-design.png";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section
      className={styles.section}
      aria-labelledby="philosophy-title"
      data-reveal
      data-header-theme="light"
    >
      <div className={styles.copy}>
        <h2 id="philosophy-title">
          More than a space.
          <br />
          <em>A feeling.</em>
        </h2>
        <p>
          We create interiors that go beyond aesthetics—thoughtful spaces shaped
          around your lifestyle, with quality materials and precise execution.
        </p>
      </div>
      <div className={styles.image}>
        <Image
          src={interiorImage}
          alt="Warm contemporary dining space"
          fill
          sizes="(max-width: 800px) 100vw, 57vw"
          data-parallax
        />
        <span>
          Spaces
          <br />
          people love
          <br />
          to live in
        </span>
      </div>
    </section>
  );
}
