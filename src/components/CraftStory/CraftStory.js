import Image from "next/image";
import backgroundImage from "../../../public/images/home/service-interior-design.png";
import styles from "./CraftStory.module.css";

const story = [
  {
    title: "The Vision",
    text: "From the first line to the final detail, we turn design concepts into thoughtfully crafted interiors.",
  },
  {
    title: "The Craft",
    text: "Quality materials, precise measurements, and expert craftsmanship bring every element together.",
  },
  {
    title: "The Transformation",
    text: "Watch your vision take shape as wireframes evolve into functional, beautifully finished spaces.",
  },
  {
    title: "The Final Reveal",
    text: "Modular interiors that balance timeless aesthetics, intelligent functionality, and enduring quality.",
  },
];

export default function CraftStory() {
  return (
    <section
      className={styles.section}
      aria-label="From vision to final reveal"
      data-craft-story
      data-header-theme="dark"
    >
      <Image
        className={styles.background}
        src={backgroundImage}
        alt="Refined completed living room interior"
        fill
        sizes="100vw"
      />
      <span className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copyStage}>
          {story.map(({ title, text }) => (
            <article
              className={styles.copyItem}
              data-craft-copy
              key={title}
            >
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
