import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import EventSection from "@/components/EventSection";
import ExperienceSection from "@/components/ExperienceSection";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <CountdownSection />
        <EventSection />
        <ExperienceSection />
        <RegisterSection />
      </main>
      <Footer />
    </>
  );
}
