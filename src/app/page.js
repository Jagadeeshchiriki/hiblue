import FinalCta from "@/components/FinalCta/FinalCta";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Materials from "@/components/Materials/Materials";
import Philosophy from "@/components/Philosophy/Philosophy";
import Process from "@/components/Process/Process";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import CraftStory from "@/components/CraftStory/CraftStory";
import ImageDrift from "@/components/ImageDrift/ImageDrift";
import Transformation from "@/components/Transformation/Transformation";
import Trust from "@/components/Trust/Trust";
import ScrollAnimations from "@/components/ScrollAnimations/ScrollAnimations";
import Header from "@/components/Header/Header";
export default function Home() {
  return (
    <ScrollAnimations>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Transformation />
        <Services />
        <CraftStory />
        <Materials /> 
        <ImageDrift />
        <Projects />
        <FinalCta />
        <Footer />
      </main>
    </ScrollAnimations>
  );
}
