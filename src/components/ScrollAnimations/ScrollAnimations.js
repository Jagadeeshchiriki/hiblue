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

    let removeHeroVideoListener = () => {};

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

    const handleMenuChange = (event) => {
      if (event.detail?.open) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    window.addEventListener("site-menu-change", handleMenuChange);

    const context = gsap.context(() => {
      const hero = document.querySelector("[data-hero]");
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (hero) {
        const heroVideo = hero.querySelector("[data-hero-video]");
        const firstHeroTitle = hero.querySelector("[data-hero-title-first]");
        const finalHeroTitle = hero.querySelector("[data-hero-title-final]");
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

        gsap.set(finalHeroTitle, {
          yPercent: 18,
          autoAlpha: 0,
          filter: "blur(7px)",
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
            firstHeroTitle,
            {
              scale: isMobile ? 0.9 : 0.82,
              yPercent: -16,
              autoAlpha: 0,
              filter: "blur(7px)",
              transformOrigin: "50% 50%",
              duration: 0.32,
            },
            0.18,
          )
          .to(
            finalHeroTitle,
            {
              yPercent: 0,
              autoAlpha: 1,
              filter: "blur(0px)",
              duration: 0.34,
              ease: "power2.out",
            },
            0.46,
          );

        if (heroVideo) {
          const addVideoScrub = () => {
            heroVideo.pause();
            heroTimeline.to(
              heroVideo,
              {
                currentTime: Math.max(0, heroVideo.duration - 0.05),
                duration: 1,
              },
              0,
            );
          };

          if (heroVideo.readyState >= 1) {
            addVideoScrub();
          } else {
            heroVideo.addEventListener("loadedmetadata", addVideoScrub, {
              once: true,
            });
            removeHeroVideoListener = () =>
              heroVideo.removeEventListener("loadedmetadata", addVideoScrub);
          }
        }

      }

      const transformation = document.querySelector("[data-transformation]");

      const philosophy = document.querySelector("[data-philosophy]");

      const expertiseSection = document.querySelector("[data-expertise]");

      if (expertiseSection) {
        const expertiseCards = gsap.utils.toArray(
          expertiseSection.querySelectorAll("[data-expertise-card]"),
        );
        const expertiseCopies = gsap.utils.toArray(
          expertiseSection.querySelectorAll("[data-expertise-copy]"),
        );
        expertiseCards.slice(1).forEach((card, index) => {
          gsap.set(card, {
            xPercent: index === 0 ? 6 : -5,
            yPercent: index === 0 ? -1 : 2,
            rotation: index === 0 ? 5 : -7,
            scale: index === 0 ? 0.95 : 0.9,
          });
        });

        gsap.set(expertiseCopies.slice(1), {
          y: 30,
          autoAlpha: 0,
          filter: "blur(8px)",
        });
        const expertiseTimeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: expertiseSection,
            start: "top top",
            end: `+=${
              (expertiseCards.length - 1) * (isMobile ? 95 : 125)
            }%`,
            pin: true,
            pinSpacing: true,
            scrub: isMobile ? 0.7 : 1,
            snap: {
              snapTo: 1 / (expertiseCards.length - 1),
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

        expertiseCards.slice(0, -1).forEach((card, index) => {
          const nextCard = expertiseCards[index + 1];
          const currentCopy = expertiseCopies[index];
          const nextCopy = expertiseCopies[index + 1];
          const position = index * 1.25 + 0.25;
          const direction = index % 2 === 0 ? -1 : 1;

          expertiseTimeline
            .to(
              card,
              {
                xPercent: direction * 112,
                yPercent: -8,
                rotation: direction * 8,
                autoAlpha: 0,
                duration: 0.8,
                ease: "power2.inOut",
              },
              position,
            )
            .to(
              nextCard,
              {
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                scale: 1,
                duration: 0.8,
                ease: "power2.inOut",
              },
              position,
            )
            .to(
              currentCopy,
              {
                y: -28,
                autoAlpha: 0,
                filter: "blur(8px)",
                duration: 0.36,
                ease: "power2.in",
              },
              position,
            )
            .fromTo(
              nextCopy,
              { y: 30, autoAlpha: 0, filter: "blur(8px)" },
              {
                y: 0,
                autoAlpha: 1,
                filter: "blur(0px)",
                duration: 0.5,
                ease: "power3.out",
                immediateRender: false,
              },
              position + 0.22,
            );
        });

        expertiseTimeline.to({}, { duration: 0.35 });
      }

      if (philosophy) {
        if (hero) {
          gsap.to(hero, {
            yPercent: isMobile ? 18 : 28,
            ease: "none",
            scrollTrigger: {
              trigger: philosophy,
              start: "top bottom",
              end: "top top",
              scrub: isMobile ? 0.65 : 1,
              invalidateOnRefresh: true,
            },
          });
        }

        const philosophyImage = philosophy.querySelector(
          "[data-philosophy-image]",
        );

        if (philosophyImage) {
          gsap.fromTo(
            philosophyImage,
            { scale: isMobile ? 0.88 : 0.8 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: philosophyImage,
                start: "top 92%",
                end: "top 18%",
                scrub: isMobile ? 0.7 : 1,
                invalidateOnRefresh: true,
              },
            },
          );
        }

        const philosophyCopy = philosophy.querySelectorAll(
          "[data-philosophy-copy] > *",
        );

        gsap.from(philosophyCopy, {
          y: 64,
          autoAlpha: 0,
          filter: "blur(10px)",
          duration: 1.15,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: philosophy,
            start: "top 72%",
            once: true,
          },
        });
      }

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

      if (services) {
        const servicesTrack = services.querySelector("[data-services-track]");
        const serviceCards = gsap.utils.toArray(
          services.querySelectorAll("[data-service-card]"),
        );

        if (servicesTrack && serviceCards.length) {
          const getHorizontalDistance = () =>
            Math.max(0, servicesTrack.scrollWidth - window.innerWidth);

          const horizontalTween = gsap.to(servicesTrack, {
            x: () => -getHorizontalDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: services,
              start: "top top",
              end: () =>
                `+=${Math.max(
                  window.innerHeight * (isMobile ? 2.6 : 3.2),
                  getHorizontalDistance() * 1.15,
                )}`,
              pin: true,
              pinSpacing: true,
              scrub: isMobile ? 0.75 : 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          serviceCards.forEach((card) => {
            const reveal = card.querySelector("[data-service-reveal]");
            const revealImage = card.querySelector("[data-service-image]");

            if (!reveal) return;

            gsap.fromTo(
              reveal,
              { clipPath: "inset(0 100% 0 0)" },
              {
                clipPath: "inset(0 0% 0 0)",
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: horizontalTween,
                  start: "center 50%",
                  end: "center 42%",
                  scrub: isMobile ? 0.55 : 0.8,
                },
              },
            );

            if (revealImage) {
              gsap.fromTo(
                revealImage,
                { scale: 1.1 },
                {
                  scale: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: card,
                    containerAnimation: horizontalTween,
                    start: "center 50%",
                    end: "center 36%",
                    scrub: isMobile ? 0.55 : 0.8,
                  },
                },
              );
            }
          });
        }
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
      removeHeroVideoListener();
      window.removeEventListener("site-menu-change", handleMenuChange);
      context.revert();
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
