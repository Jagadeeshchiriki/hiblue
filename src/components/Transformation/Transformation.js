import Image from "next/image";
import conceptImage from "../../../public/images/home/03-design-concept.png";
import finishedImage from "../../../public/images/home/03-design-finished.png";
import styles from "./Transformation.module.css";

export default function Transformation() {
  return (
    <section
      className={styles.section}
      aria-labelledby="transformation-title"
      data-transformation
      data-header-theme="dark"
    >
      <div className={styles.stage} data-transformation-stage>
        <div className={styles.concept} data-transformation-concept>
          <Image
            src={conceptImage}
            alt="Interior design wireframe concept"
            fill
            sizes="(max-width: 800px) 100vw, 68vw"
          />
          <span>Concept</span>
        </div>

        <div className={styles.finished} data-transformation-finished>
          <Image
            src={finishedImage}
            alt="Completed interior"
            fill
            sizes="(max-width: 800px) 100vw, 68vw"
          />
          <span>Finished</span>
        </div>

        <div className={styles.divider} data-transformation-divider>
          <i aria-hidden="true">↔</i>
        </div>
      </div>

      <div className={styles.copy} data-transformation-copy>
        <h2
          id="transformation-title"
          className={styles.flipTitle}
          aria-label="From Lines To Living Spaces. Designed in Detail. Crafted to Perfection."
        >
          <span data-transformation-copy-concept aria-hidden="true">
            From Lines
            <br />
            To <em>Living Spaces.</em>
          </span>
          <span data-transformation-copy-finished aria-hidden="true">
            Designed in Detail.
            <br />
            <em>Crafted to Perfection.</em>
          </span>
        </h2>
      </div>
    </section>
  );
}
