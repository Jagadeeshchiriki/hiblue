"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations({ children }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });
    const updateLenis = (time) => lenis.raf(time * 1000);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      const hero = document.querySelector("[data-hero]");
      const header = document.querySelectorAll(
        "[data-site-header], [data-site-logo]",
      );
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (hero) {
        const heroTimeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: isMobile ? "+=90%" : "+=150%",
            pin: true,
            pinSpacing: true,
            scrub: isMobile ? 0.65 : 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        heroTimeline
          .to(
            "[data-hero-image]",
            {
              scale: isMobile ? 1.1 : 1.2,
              yPercent: isMobile ? 2 : 4,
              transformOrigin: "50% 52%",
              duration: 1,
            },
            0,
          )
          .to(
            "[data-hero-foreground]",
            {
              scale: isMobile ? 1.15 : 1.34,
              yPercent: isMobile ? -1 : -4,
              transformOrigin: "50% 75%",
              duration: 1,
            },
            0,
          )
          .to(
            "[data-hero-support]",
            { yPercent: -32, autoAlpha: 0, duration: 0.3 },
            0.05,
          )
          .to(
            "[data-hero-title]",
            {
              scale: isMobile ? 0.82 : 0.7,
              yPercent: -18,
              autoAlpha: 0,
              filter: "blur(7px)",
              transformOrigin: "50% 50%",
              duration: 0.75,
            },
            0.1,
          );

        if (header.length) {
          heroTimeline
            .to(header, { yPercent: -125, autoAlpha: 0, duration: 0.2 }, 0.08)
            .to(header, { yPercent: 0, autoAlpha: 1, duration: 0.12 }, 0.88);
        }
      }

      const transformation = document.querySelector("[data-transformation]");

      if (transformation) {
        const conceptCopy = transformation.querySelector(
          "[data-transformation-copy-concept]",
        );
        const finishedCopy = transformation.querySelector(
          "[data-transformation-copy-finished]",
        );
        let showingFinishedCopy = false;

        gsap.set(finishedCopy, {
          rotationX: -90,
          y: 24,
          autoAlpha: 0,
        });

        const copyFlipTimeline = gsap
          .timeline({ paused: true })
          .to(
            conceptCopy,
            {
              rotationX: 90,
              y: -24,
              autoAlpha: 0,
              duration: 0.32,
              ease: "power2.in",
            },
            0,
          )
          .to(
            finishedCopy,
            {
              rotationX: 0,
              y: 0,
              autoAlpha: 1,
              duration: 0.38,
              ease: "power2.out",
            },
            0.16,
          );

        const transformationTimeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: transformation,
            start: "top top",
            end: isMobile ? "+=85%" : "+=135%",
            pin: true,
            pinSpacing: true,
            scrub: isMobile ? 0.65 : 0.9,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const shouldShowFinishedCopy = self.progress >= 0.5;

              if (shouldShowFinishedCopy === showingFinishedCopy) return;

              showingFinishedCopy = shouldShowFinishedCopy;

              if (shouldShowFinishedCopy) {
                copyFlipTimeline.play();
              } else {
                copyFlipTimeline.reverse();
              }
            },
          },
        });

        transformationTimeline
          .fromTo(
            "[data-transformation-concept]",
            { scale: 1 },
            { scale: isMobile ? 1.025 : 1.05, duration: 1 },
            0,
          )
          .fromTo(
            "[data-transformation-finished]",
            { clipPath: "inset(0 100% 0 0)", scale: 1.045 },
            { clipPath: "inset(0 0% 0 0)", scale: 1, duration: 1 },
            0,
          )
          .fromTo(
            "[data-transformation-divider]",
            { left: "0%" },
            { left: "100%", duration: 1 },
            0,
          )
          .fromTo(
            "[data-transformation-copy]",
            { opacity: 0.72, y: 24 },
            { opacity: 1, y: 0, duration: 0.35 },
            0.05,
          );
      }

      const services = document.querySelector("[data-services]");

      if (services && !isMobile) {
        const serviceCards = gsap.utils.toArray("[data-service-card]");
        const serviceImages = gsap.utils.toArray("[data-service-image]");

        gsap.set(serviceCards.slice(1), {
          clipPath: "inset(100% 0 0 0)",
          yPercent: 7,
        });

        const servicesTimeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: services,
            start: "top top",
            end: `+=${serviceCards.length * 85}%`,
            pin: true,
            pinSpacing: true,
            scrub: 0.8,
            snap: {
              snapTo: 1 / (serviceCards.length - 1),
              duration: { min: 0.25, max: 0.65 },
              delay: 0.08,
              ease: "power2.inOut",
              directional: false,
              inertia: false,
            },
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        serviceCards.slice(1).forEach((card, index) => {
          const position = index;

          servicesTimeline
            .to(
              serviceImages[index],
              { scale: 1.08, duration: 1 },
              position,
            )
            .to(
              card,
              {
                clipPath: "inset(0% 0 0 0)",
                yPercent: 0,
                duration: 1,
              },
              position,
            );
        });
      }

      const craftStory = document.querySelector("[data-craft-story]");

      if (craftStory && !isMobile) {
        const craftCopies = gsap.utils.toArray(
          craftStory.querySelectorAll("[data-craft-copy]"),
        );
        let activeCraftStep = 0;

        gsap.set(craftCopies.slice(1), {
          rotationX: 68,
          y: 20,
          autoAlpha: 0,
        });

        const showCraftStep = (nextStep) => {
          if (nextStep === activeCraftStep) return;

          const previousStep = activeCraftStep;
          const movingForward = nextStep > previousStep;
          const previousCopy = craftCopies[previousStep];
          const nextCopy = craftCopies[nextStep];

          activeCraftStep = nextStep;

          gsap.killTweensOf(craftCopies);
          craftCopies.forEach((copy, index) => {
            if (index !== previousStep && index !== nextStep) {
              gsap.set(copy, { autoAlpha: 0 });
            }
          });

          gsap
            .timeline()
            .to(
              previousCopy,
              {
                rotationX: movingForward ? -68 : 68,
                y: movingForward ? -20 : 20,
                autoAlpha: 0,
                duration: 0.46,
                ease: "power2.inOut",
              },
              0,
            )
            .fromTo(
              nextCopy,
              {
                rotationX: movingForward ? 68 : -68,
                y: movingForward ? 20 : -20,
                autoAlpha: 0,
              },
              {
                rotationX: 0,
                y: 0,
                autoAlpha: 1,
                duration: 0.62,
                ease: "power3.out",
              },
              0.2,
            );
        };

        ScrollTrigger.create({
          trigger: craftStory,
          start: "top top",
          end: `+=${craftCopies.length * 55}%`,
          pin: true,
          pinSpacing: true,
          snap: {
            snapTo: 1 / craftCopies.length,
            duration: { min: 0.22, max: 0.4 },
            delay: 0.04,
            ease: "power2.inOut",
            directional: true,
            inertia: false,
          },
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const nextStep = Math.min(
              craftCopies.length - 1,
              Math.floor(self.progress * craftCopies.length),
            );

            showCraftStep(nextStep);
          },
        });
      }

      const imageDrift = document.querySelector("[data-image-drift]");

      if (imageDrift) {
        const imageTrack = imageDrift.querySelector(
          "[data-image-drift-track]",
        );
        const imageViewport = imageTrack?.parentElement;

        if (imageTrack && imageViewport) {
          gsap.fromTo(
            imageTrack,
            {
              x: 0,
              y: () => window.innerHeight * 0.045,
            },
            {
              x: () =>
                -Math.max(0, imageTrack.scrollWidth - imageViewport.clientWidth),
              y: () => window.innerHeight * -0.045,
              ease: "none",
              scrollTrigger: {
                trigger: imageDrift,
                start: "top top",
                end: () => {
                  const horizontalDistance = Math.max(
                    0,
                    imageTrack.scrollWidth - imageViewport.clientWidth,
                  );

                  return `+=${Math.max(
                    window.innerHeight * 1.8,
                    horizontalDistance * 0.75,
                  )}`;
                },
                pin: true,
                pinSpacing: true,
                scrub: 1.35,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            },
          );
        }
      }

      gsap.utils.toArray("[data-reveal]").forEach((section) => {
        gsap.from(section, {
          y: 70,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 84%", once: true },
        });
      });

      gsap.utils.toArray("[data-parallax]").forEach((image) => {
        gsap.fromTo(
          image,
          { yPercent: -5, scale: 1.06 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: image.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          },
        );
      });
    }, root);

    ScrollTrigger.refresh();

    return () => {
      context.revert();
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
