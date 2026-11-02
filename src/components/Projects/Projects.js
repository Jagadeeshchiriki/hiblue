import Image from "next/image";
import Link from "next/link";
import bedroomImage from "../../../public/images/home/service-interior-design.png";
import kitchenProjectImage from "../../../public/images/home/04-service-modular-kitchen.png";
import livingRoomImage from "../../../public/images/home/service-interior-design1.png";
import staircaseImage from "../../../public/images/home/06-project-staircase.png";
import styles from "./Projects.module.css";
const projects = [
  ["The Quiet Residence", "Residential · Living room", livingRoomImage],
  ["Form & Function", "Residential · Kitchen", kitchenProjectImage],
  ["A Private Sanctuary", "Residential · Bedroom", bedroomImage],
  ["Sculpted in Light", "Residential · Staircase", staircaseImage],
];
export default function Projects() {
  return (
    <section
      className={styles.section}
      aria-labelledby="projects-title"
      data-reveal
    >
      <div className={styles.heading}>
        <div>
          <h2 id="projects-title">
            Spaces with
            <br />a point of view.
          </h2>
        </div>
      </div>
      <div className={styles.grid}>
        {projects.map(([title, category, src]) => (
          <Link href="/projects" className={styles.card} key={title}>
            <div>
              <Image
                src={src}
                alt={`${title} — ${category}`}
                fill
                sizes="(max-width: 720px) 100vw, 50vw"
              />
            </div>
            <h3>{title}</h3>
            <p>{category}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
