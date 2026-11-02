import Image from "next/image";
import loungeImage from "../../../public/images/home/Common-by-Naoto-Fukasawa.jpg";
import livingImage from "../../../public/images/home/service-interior-design1.png";
import kitchenImage from "../../../public/images/home/04-service-modular-kitchen.png";
import wardrobeImage from "../../../public/images/home/Wardrobe2.webp";
import doorImage from "../../../public/images/home/door-banner02.webp";
import staircaseImage from "../../../public/images/home/06-project-staircase.png";
import diningImage from "../../../public/images/home/08-testimonial-bg.png";
import styles from "./ImageDrift.module.css";

const images = [
  [loungeImage, "Warm wood and glass lounge interior"],
  [livingImage, "Sunlit contemporary living room"],
  [kitchenImage, "Natural wood modular kitchen"],
  [wardrobeImage, "Dark glass custom wardrobe"],
  [doorImage, "Crafted timber feature door"],
  [staircaseImage, "Open staircase in a bright modern home"],
  [diningImage, "Warm dining room and kitchen interior"],
];

export default function ImageDrift() {
  return (
    <section
      id="image-gallery"
      className={styles.section}
      aria-label="HiBlue interior gallery"
      data-image-drift
    >
      <div className={styles.viewport}>
        <div className={styles.track} data-image-drift-track>
          {images.map(([src, alt]) => (
            <figure className={styles.card} key={alt}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 767px) 72vw, 30vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
