import Image from "next/image";
import founderImage from "../../../../public/images/home/philosophy-manufacturing.png";
import styles from "./Founder.module.css";

export default function Founder() {
  return (
    <section className={styles.founder} aria-labelledby="founder-heading">
      <div className={styles.intro}>
        <p className={styles.kicker}>The Founder</p>
        <h2 id="founder-heading" className={styles.heading}>
          A vision shaped by <em>quality.</em>
        </h2>
      </div>

      <div className={styles.content}>
        <figure className={styles.portrait}>
          <Image
            className={styles.image}
            src={founderImage}
            alt="HiBlue team member crafting a modular panel in the workshop"
            fill
            sizes="(max-width: 800px) 100vw, 48vw"
          />
          <figcaption className={styles.caption}>
            <span>Founder</span>
            <span>HiBlue Modular Industries</span>
          </figcaption>
        </figure>

        <div className={styles.message}>
          <span className={styles.quoteMark} aria-hidden="true">
            &ldquo;
          </span>
          <blockquote>
            HiBlue began with a simple belief: every customer deserves a space
            that is thoughtfully made, precisely built, and created to last.
          </blockquote>
          <div className={styles.copy}>
            <p>
              Since 2017, that belief has guided us from the first conversation
              to the final installation. We bring customer ideas to life through
              careful planning, reliable manufacturing, and uncompromising
              attention to detail.
            </p>
            <p>
              As we grow, our purpose remains unchanged: to build modular
              solutions that earn trust through quality, consistency, and honest
              workmanship.
            </p>
          </div>
          <div className={styles.signature}>
            <span className={styles.signatureLine} aria-hidden="true" />
            <div>
              <strong>Founder</strong>
              <span>HI BLUE MODULAR INDUSTRIES LLP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
