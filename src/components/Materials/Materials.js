import Image from "next/image";
import detailsImage from "../../../public/images/home/05-materials-details.jpg";
import fabricImage from "../../../public/images/home/05-materials-fabric.jpg";
import hardwareImage from "../../../public/images/home/05-materials-hardware.jpg";
import stoneImage from "../../../public/images/home/05-materials-stone.jpg";
import woodImage from "../../../public/images/home/05-materials-wood.jpg";
import styles from "./Materials.module.css";
const materials = [
  ["Wood", woodImage],
  ["Fabric", fabricImage],
  ["Stone", stoneImage],
  ["Hardware", hardwareImage],
  ["Details", detailsImage],
];
export default function Materials() {
  return (
    <section
      className={styles.section}
      aria-labelledby="materials-title"
      data-reveal
    >
      <div className={styles.copy}>
        <h2 id="materials-title">
          Materials Matter Craftsmanship Lasts.
        </h2>
        <p>
          We work with considered materials and reliable products to create
          interiors that look beautiful and stand the test of time.
        </p>
      </div>
      <div className={styles.gallery}>
        {materials.map(([name, src], index) => (
          <figure key={name} className={index === 0 ? styles.featured : ""}>
            <Image
              src={src}
              alt={`${name} material detail`}
              fill
              sizes={
                index === 0
                  ? "(max-width: 700px) 100vw, 42vw"
                  : "(max-width: 700px) 50vw, 21vw"
              }
            />
            <figcaption>{name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
