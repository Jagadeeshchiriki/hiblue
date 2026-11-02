import Image from "next/image";
import ctaImage from "../../../public/images/home/cta.png";
import ArrowLink from "../shared/ArrowLink";
import styles from "./FinalCta.module.css";
export default function FinalCta() {
  return (
    <section className={styles.section} aria-labelledby="cta-title" data-reveal>
      <Image
        className={styles.background}
        src={ctaImage}
        alt=""
        fill
        sizes="100vw"
        data-parallax
      />
      <div>
        <h2 id="cta-title">
          Let&apos;s create a space
          <br />
          that feels like <em>yours.</em>
        </h2>
        <p>Start a conversation about your interior design project.</p>
        <ArrowLink href="/contact" light>
          Start your project
        </ArrowLink>
      </div>
    </section>
  );
}
