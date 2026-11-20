import Image from "next/image";
import modularWorksImage from "../../../public/images/modular_works.png";
import deliverImage from "../../../public/images/home/deliver.jpg";
import designImage from "../../../public/images/home/design.jpg";
import styles from "./Expertise.module.css";

const expertise = [
  {
    title: "Share Your Design",
    description:
      "Send us your approved drawings, dimensions and finish selections. We review the details with your team before production begins.",
    image: designImage,
    alt: "Worker processing white modular boards in the HIBLUE factory",
  },
  {
    title: "Built to Your Specifications",
    description:
      "At our factory, we cut each panel to size and finish the edges to match the dimensions, materials and finishes in your drawings.",
    image: modularWorksImage,
    alt: "Close-up view of precision aluminium extrusion profiles",
  },
  {
    title: "Delivered to Your Site",
    description:
      "We pack finished units to protect corners and surfaces, then coordinate delivery directly with your team on site.",
    image: deliverImage,
    alt: "Delivery truck transporting modular furniture units",
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
