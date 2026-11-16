"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import storyImage from "../../../../public/images/about/our-story.png";
import styles from "./OurStory.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const section = useRef(null);
  const heading = useRef(null);
  const imageFrame = useRef(null);
  const image = useRef(null);
  const narrative = useRef(null);
  const statement = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const headingLines = heading.current.querySelectorAll("span");
      const paragraphs = narrative.current.querySelectorAll("p");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section.current,
            start: "top 78%",
            end: "top 18%",
            scrub: 0.8,
          },
        })
        .from(headingLines, {
          yPercent: 105,
          autoAlpha: 0,
          stagger: 0.12,
          ease: "power3.out",
        })
        .from(
          imageFrame.current,
          {
            clipPath: "inset(12% 11% 12% 11% round 2rem)",
            scale: 0.94,
            ease: "power2.out",
          },
          0.08,
        );

      gsap.fromTo(
        image.current,
        { scale: 1.14, yPercent: -4 },
        {
          scale: 1,
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: imageFrame.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        },
      );

      gsap.from(paragraphs, {
        y: 42,
        autoAlpha: 0,
        stagger: 0.14,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: narrative.current,
          start: "top 76%",
          once: true,
        },
      });

      gsap.from(statement.current, {
        y: 60,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statement.current,
          start: "top 82%",
          once: true,
        },
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section className={styles.story} id="our-story" ref={section}>
      <h2 className={styles.heading} ref={heading}>
        <span>Built on Quality.</span>
        <span>
          Driven by <em>Craftsmanship.</em>
        </span>
      </h2>

      <div className={styles.imageFrame} ref={imageFrame}>
        <Image
          ref={image}
          className={styles.image}
          src={storyImage}
          alt="HiBlue craftspeople measuring a modular panel in the manufacturing facility"
          fill
          sizes="100vw"
        />
      </div>

      <div className={styles.narrative} ref={narrative}>
        <p className={styles.lead}>
          Since 2017, HI BLUE MODULAR INDUSTRIES LLP has been transforming
          ideas and customer designs into high-quality modular solutions.
        </p>
        <div className={styles.bodyCopy}>
          <p>
            What began with a commitment to quality workmanship has grown into
            a manufacturing-driven business focused on precision, reliability,
            and attention to every detail. We work closely with our customers
            to understand their requirements, manufacture with carefully
            selected materials, and deliver solutions that meet their
            expectations.
          </p>
          <p>
            From the selection of materials to the final installation, every
            stage reflects our dedication to quality and long-lasting
            performance.
          </p>
        </div>
      </div>

      <div className={styles.statement} ref={statement}>
        <blockquote>
          We don&apos;t just manufacture modular products. We bring customer
          ideas to life with <em>precision, quality, and trust.</em>
        </blockquote>
      </div>
    </section>
  );
}
