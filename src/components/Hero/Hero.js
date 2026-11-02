import Image from "next/image";
import heroImage from "../../../public/images/hero-bg2.png";
import ArrowLink from "../shared/ArrowLink";
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
        <Image src={heroImage} alt="" fill sizes="100vw" preload />
      </div>
      <div
        className={styles.foreground}
        aria-hidden="true"
        data-hero-foreground
      >
        {/* <Image src={heroImage} alt="" fill sizes="100vw" /> */}
      </div>
      <div className={styles.content} data-hero-content>
        <h1 id="hero-title" data-hero-title>
          Designed With
          <br />
          Quality That Lasts
        </h1>
        <div className={styles.support} data-hero-support>
          <ArrowLink href="/projects" light>
            Explore our work
          </ArrowLink>
        </div>
      </div>
   
    </section>
  );
}
