import Hero from "@/components/Hero";
import Spotlight from "@/components/Spotlight";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Reels from "@/components/Reels";
import Steps from "@/components/Steps";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Preloader />
      <Hero />
      <Spotlight />
      <Services />
      <Work />
      <Projects />
      <Reels />
      <Steps />
      <Team />
    </main>
  );
}
