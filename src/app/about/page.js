import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AboutIntro from "./AboutIntro/AboutIntro";
import OurStory from "./OurStory/OurStory";
import Founder from "./Founder/Founder";
import AdvancedMachinery from "./AdvancedMachinery/AdvancedMachinery";

export const metadata = {
  title: "About HiBlue",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutIntro />
        <OurStory />
        <Founder />
        <AdvancedMachinery />
      </main>
      <Footer />
    </>
  );
}
