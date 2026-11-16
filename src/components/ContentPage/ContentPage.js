import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ArrowLink from "@/components/shared/ArrowLink";
import styles from "./ContentPage.module.css";

export default function ContentPage({ label, title, copy, children }) {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <section className={styles.hero}>
          <div className={styles.content}>
            <span>{label}</span>
            <h1>{title}</h1>
            <p>{copy}</p>
            <ArrowLink href="/" light>
              Back to home
            </ArrowLink>
          </div>
        </section>
        {children ?? (
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
        )}
      </main>
      <Footer />
    </>
  );
}
