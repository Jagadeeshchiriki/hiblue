import Image from "next/image";
import modularWorksImage from "../../../public/images/modular_works.png";
import aluminiumImage from "../../../public/images/aluminum_modular1.png";
import glassImage from "../../../public/images/inhouse_glass.png";
import styles from "./Expertise.module.css";

const expertise = [
  {
    title: "Modular Works",
    description:
      "From precision cutting to seamless assembly, we manufacture modular furniture components with consistent quality, accuracy, and attention to detail.",
    image: modularWorksImage,
    alt: "Worker processing white modular boards in the HIBLUE factory",
  },
  {
    title: "Aluminium Profile Processing",
    description:
      "Precision-cut aluminium profiles, processed for clean finishes, reliable fitting, and seamless integration into modern modular furniture systems.",
    image: aluminiumImage,
    alt: "Close-up view of precision aluminium extrusion profiles",
  },
  {
    title: "In-House Glass Processing",
    description:
      "From accurate measurements to carefully finished glass panels, our in-house processing helps deliver consistency, precision, and dependable quality.",
    image: glassImage,
    alt: "Glass panel being measured during in-house processing",
  },
];

export default function Expertise() {
  return (
    <section
      className={styles.section}
      aria-label="Our expertise"
      data-expertise
      data-header-theme="light"
    >
      <div className={styles.shell}>
        <div className={styles.stage}>
          <div className={styles.imageStack} data-expertise-stack>
            {expertise.map(({ title, image, alt }, index) => (
              <figure
                className={styles.imageCard}
                data-expertise-card
                key={title}
                style={{ zIndex: expertise.length - index }}
              >
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(max-width: 800px) 88vw, 48vw"
                />
              </figure>
            ))}
          </div>

          <div className={styles.copyStage}>
            <div className={styles.copyItems}>
              {expertise.map(({ title, description }) => (
                <article
                  className={styles.copyItem}
                  data-expertise-copy
                  key={title}
                >
                  <h3>{title}</h3>
                  <span className={styles.accent} aria-hidden="true" />
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
