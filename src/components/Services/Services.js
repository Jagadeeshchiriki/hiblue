import Image from "next/image";
import Link from "next/link";
import designBuildImage from "../../../public/images/home/door-banner02.webp";
import interiorDesignImage from "../../../public/images/home/service-interior-design1.png";
import kitchenImage from "../../../public/images/home/artisan-1.webp";
import wardrobeImage from "../../../public/images/home/Wardrobe2.webp";
import styles from "./Services.module.css";

const services = [
  [
    "Interior Design",
    "Spaces composed around the way you live.",
    interiorDesignImage,
  ],
  [
    "Modular Kitchens",
    "Beautifully planned for effortless everyday use.",
    kitchenImage,
  ],
  [
    "Custom Wardrobes",
    "Tailored storage with a refined architectural finish.",
    wardrobeImage,
  ],
  ["Doors", "The first detail that sets the tone for your home.", designBuildImage],
];

export default function Services() {
  return (
    <section
      id="elegant-design"
      className={styles.section}
      aria-labelledby="services-title"
      data-services
    >
      <div className={styles.inner}>
        <div className={styles.copy} data-services-copy>
          <h2 id="services-title">
            <span className={styles.titleLine}>Designed Around</span>
            <span className={styles.titleLine}>
              The Way <em>You Live.</em>
            </span>
          </h2>
          <p className={styles.intro}>
            From thoughtful design to precise execution, we create complete
            interiors tailored to your space, style and needs.
          </p>

        </div>

        <div className={styles.stage} data-services-stage>
          {services.map(([name, description, src], index) => (
            <Link
              href="/services"
              className={styles.card}
              data-service-card
              key={name}
              style={{ zIndex: index + 1 }}
              aria-label={`Explore ${name}`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, 62vw"
                data-service-image
              />
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
    </section>
  );
}
