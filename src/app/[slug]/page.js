import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ArrowLink from "@/components/shared/ArrowLink";
import styles from "./page.module.css";

const pages = {
  about: {
    label: "About HiBlue",
    title: "Interiors shaped around life.",
    copy: "HiBlue brings spatial thinking, material clarity and careful execution together to create homes that feel considered and personal.",
  },
  services: {
    label: "Our services",
    title: "One vision, thoughtfully delivered.",
    copy: "From early space planning to material selection and on-site execution, our service structure is designed to keep every decision connected.",
  },
  projects: {
    label: "Selected work",
    title: "Spaces with a point of view.",
    copy: "A growing collection of residential interiors, kitchens and private spaces. Verified project stories and photography will be added as they become available.",
  },
  products: {
    label: "Products & materials",
    title: "Materials that reward a closer look.",
    copy: "Explore a considered palette of cabinetry, stone, timber, finishes and hardware selected for lasting performance and tactile quality.",
  },
  process: {
    label: "Our process",
    title: "Clarity at every stage.",
    copy: "Discover, design, select and execute—a collaborative path that keeps the vision clear from the first conversation to final handover.",
  },
  contact: {
    label: "Start a project",
    title: "Let’s make space for what matters.",
    copy: "Tell us about your space, your aspirations and where you are in the process. Contact details and an enquiry form will be added when supplied.",
  },
  privacy: {
    label: "Legal",
    title: "Privacy policy",
    copy: "The final privacy policy will be published here once HiBlue’s approved legal copy is available.",
  },
  terms: {
    label: "Legal",
    title: "Terms of service",
    copy: "The final terms of service will be published here once HiBlue’s approved legal copy is available.",
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = pages[slug];
  return page ? { title: page.label } : {};
}
export default async function ContentPage({ params }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return (
    <>
      <main className={styles.main}>
        <Header />
        <section className={styles.hero}>
          <div className={styles.content}>
            <span>{page.label}</span>
            <h1>{page.title}</h1>
            <p>{page.copy}</p>
            <ArrowLink href="/" light>
              Back to home
            </ArrowLink>
          </div>
        </section>
        <section className={styles.placeholder}>
          <p>Page structure ready</p>
          <h2>
            More HiBlue content
            <br />
            is coming <em>soon.</em>
          </h2>
          <p>
            This route is connected and ready for verified company details,
            photography and page-specific content.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
