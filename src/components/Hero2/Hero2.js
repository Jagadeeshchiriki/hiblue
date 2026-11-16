import heroIntroVideo from "../../../public/images/IMG_2746.mp4";
import styles from "./Hero2.module.css";


export default function Hero2() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-title"
      data-hero
      data-header-theme="dark"
    >
      <div className={styles.backdrop} aria-hidden="true" data-hero-image>
        <video muted playsInline preload="auto" data-hero-video>
          <source src={heroIntroVideo} type="video/mp4" />
        </video>
      </div>
      <div
        className={styles.foreground}
        aria-hidden="true"
        data-hero-foreground
      />
      <div className={styles.content} data-hero-content>
        <h1 id="hero-title" data-hero-title>
          Designed With
          <br />
          Quality That Lasts
        </h1>
      </div>
    </section>
  );
}
