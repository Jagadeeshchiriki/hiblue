"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import forestImage from "../../../../public/images/about/Forest_Gallery.avif";
import truckImage from "../../../../public/images/about/truck2.png";
import styles from "./AboutIntro.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutIntro() {
  const section = useRef(null);
  const van = useRef(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(
        {
          desktop: "(min-width: 768px)",
          mobile: "(max-width: 767px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          const { desktop, reduceMotion } = conditions;

          if (reduceMotion) {
            gsap.set(van.current, { xPercent: -50 });
            return;
          }

          gsap.fromTo(
            van.current,
            {
              x: () =>
                desktop
                  ? -van.current.offsetWidth * 0.12
                  : -van.current.offsetWidth * 0.22,
            },
            {
              x: () => window.innerWidth + 16,
              ease: "none",
              scrollTrigger: {
                trigger: section.current,
                start: "top top",
                end: "bottom top",
                scrub: desktop ? 1 : 0.65,
                invalidateOnRefresh: true,
              },
            },
          );
        },
      );
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section className={styles.intro} id="image-section" ref={section}>
      <div className={styles.scene} aria-hidden="true">
        <Image
          className={styles.forest}
          src={forestImage}
          alt=""
          width={1536}
          height={570}
          sizes="100vw"
          unoptimized
        />
        <div className={styles.road} />
        <div className={styles.van} ref={van}>
          <Image
            src={truckImage}
            alt=""
            width={1813}
            height={868}
            sizes="(max-width: 767px) 95vw, 64vw"
          />
        </div>
      </div>
    </section>
  );
}
