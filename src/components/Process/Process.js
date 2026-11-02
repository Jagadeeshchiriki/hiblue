import Image from "next/image";
import designImage from "../../../public/images/home/07-process-design.jpg";
import discoverImage from "../../../public/images/home/07-process-discover.jpg";
import executeImage from "../../../public/images/home/07-process-execute.jpg";
import selectImage from "../../../public/images/home/07-process-select.jpg";
import ArrowLink from "../shared/ArrowLink";
import styles from "./Process.module.css";
const steps = [
  ["Discover", "Understand your space, needs and aspirations.", discoverImage],
  ["Design", "Shape the concept, layout and visual direction.", designImage],
  ["Select", "Finalize materials, finishes and key details.", selectImage],
  [
    "Execute",
    "Bring the design to life with precision and care.",
    executeImage,
  ],
];
export default function Process() {
  return (
    <section
      className={styles.section}
      aria-labelledby="process-title"
      data-reveal
    >
      <div className={styles.heading}>
        <div>
          <h2 id="process-title">
            A clearer path
            <br />
            to better spaces.
          </h2>
        </div>
        <div>
          <p>
            A structured and collaborative journey from first idea to final
            handover, with clarity at every step.
          </p>
          <ArrowLink href="/process">Learn about our process</ArrowLink>
        </div>
      </div>
      <ol>
        {steps.map(([title, copy, src], index) => (
          <li key={title}>
            <div className={styles.stepImage}>
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 750px) 100vw, 25vw"
              />
            </div>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
