import heroIntroVideo from "../../../public/images/home2-scrub1.mp4";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-title"
      data-hero
      data-header-theme="dark"
    >
      <div className={styles.backdrop} aria-hidden="true" data-hero-image>
        <video autoPlay loop muted playsInline preload="auto">
          <source src={heroIntroVideo} type="video/mp4" />
        </video>
      </div>
      <div
        className={styles.foreground}
        aria-hidden="true"
        data-hero-foreground
      >
        {/* <Image src={heroImage} alt="" fill sizes="100vw" /> */}
      </div>
      <div className={styles.content} data-hero-content>
        <h1 id="hero-title" className={styles.title}>
          <span className={styles.titleStep} data-hero-title-first>
            Your Vision.
            <br />
            Our Craftsmanship.
          </span>
          <span className={styles.titleStep} data-hero-title-final>
            Crafted to Your Design.
            <br />
            Built to Last.
          </span>
        </h1>
      </div>
    </section>
  );
}
