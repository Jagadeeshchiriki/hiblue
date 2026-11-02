import Image from "next/image";
import testimonialImage from "../../../public/images/home/08-testimonial-bg.png";
import styles from "./Trust.module.css";
export default function Trust() {
  return (
    <section
      className={styles.section}
      aria-labelledby="trust-title"
      data-reveal
    >
      <div>
        <h2 id="trust-title">
          Good design
          <br />
          is only the <em>beginning.</em>
        </h2>
      </div>
      <p>
        Clear communication, careful detailing and considered execution guide
        every project. Verified client stories and credentials will be added
        here as they become available.
      </p>
      <div className={styles.image}>
        <Image
          src={testimonialImage}
          alt="Considered living room interior"
          fill
          sizes="(max-width: 800px) 100vw, 38vw"
          data-parallax
        />
      </div>
    </section>
  );
}
