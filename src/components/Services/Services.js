import Image from "next/image";
import Link from "next/link";
import doorImage from "../../../public/images/home/interior_units1.jpg";
import doorRevealImage from "../../../public/images/home/interior_units3.jpg";
import interiorImage from "../../../public/images/home/interior_1.jpg";
import interiorRevealImage from "../../../public/images/home/interior_2.jpg";
import kitchenImage from "../../../public/images/home/kitchen2.jpg";
import kitchenRevealImage from "../../../public/images/home/kitchen4.jpg";
import wardrobeImage from "../../../public/images/home/wardrobe3.jpg";
import wardrobeRevealImage from "../../../public/images/home/wardrobe4.jpg";
import styles from "./Services.module.css";

const services = [
  {
    name: "Interior Design",
    description: "Spaces composed around the way you live.",
    images: [interiorImage, interiorRevealImage],
  },
  {
    name: "Modular Kitchens",
    description: "Beautifully planned for effortless everyday use.",
    images: [kitchenImage, kitchenRevealImage],
  },
  {
    name: "Custom Wardrobes",
    description: "Tailored storage with a refined architectural finish.",
    images: [wardrobeImage, wardrobeRevealImage],
  },
  {
    name: "Interior Units",
    description: "The first detail that sets the tone for your home.",
    images: [doorImage, doorRevealImage],
  },
];

export default function Services() {
  return (
    <section
      id="elegant-design"
      className={styles.section}
      aria-labelledby="services-title"
      data-services
    >
      <div className={styles.inner} data-services-pin>
        <div className={styles.copy} data-services-copy>
          <h2 id="services-title">
            <span className={styles.titleLine}>Designed Around</span>
            <span className={styles.titleLine}>
              The Way You Live.
            </span>
          </h2>
          <p className={styles.intro}>
            From thoughtful design to precise execution, we create complete
            interiors tailored to your space, style and needs.
          </p>

        </div>

        <div className={styles.stage} data-services-stage>
          <div className={styles.track} data-services-track>
          {services.map(({ name, description, images }) => (
            <Link
              href="/services"
              className={styles.card}
              data-service-card
              key={name}
              aria-label={`Explore ${name}`}
            >
              <span className={styles.imageFrame}>
                <Image
                  src={images[0]}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 84vw, 62vw"
                  className={styles.baseImage}
                />
                <span className={styles.reveal} data-service-reveal>
                  <Image
                    src={images[1]}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 84vw, 62vw"
                    data-service-image
                  />
                </span>
              </span>
              <span className={styles.shade} aria-hidden="true" />
              <span className={styles.cardCopy}>
                <span>
                  <strong>{name}</strong>
                  <small>{description}</small>
                </span>
              </span>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
