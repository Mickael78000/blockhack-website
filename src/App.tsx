import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { motion, useScroll, useSpring } from "framer-motion";
import { CaseStudiesCarousel } from "@/sections/CaseStudiesCarousel";
import { FloatingParticles } from "@/components/FloatingParticles";
import { FloatingGeometries } from "@/components/FloatingGeometries";
import { LightBeams } from "@/components/LightBeams";
import { GridPattern } from "@/components/GridPattern";
import { ServicesSection } from "@/sections/ServicesSection";
import { ToolsSection } from "@/sections/ToolsSection";
import { AuditsStatsSection } from "@/sections/AuditsStatsSection";
import { EducationSection } from "@/sections/EducationSection";
import { TeamSection } from "@/sections/TeamSection";
import { Footer } from "@/sections/Footer";

export const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="text-white/70 text-[15.1297px] not-italic normal-nums font-medium accent-auto bg-black box-border caret-transparent block tracking-[normal] leading-[24.2075px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-space_grotesk md:text-[15.667px] md:leading-[25.0672px] relative overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 origin-left z-[9999]"
        style={{ scaleX }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Neon Glows */}
        <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[120px] -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/15 blur-[100px] top-[20%] right-[10%] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[130px] top-[40%] left-[15%] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-[350px] h-[350px] rounded-full bg-blue-600/20 blur-[110px] top-[60%] right-[20%] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/15 blur-[140px] bottom-[10%] left-[30%] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute w-[280px] h-[280px] rounded-full bg-blue-400/25 blur-[90px] bottom-[20%] right-[5%] animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        {/* New Effects */}
        <GridPattern />
        <FloatingParticles />
        <FloatingGeometries />
        <LightBeams />
      </div>
      <div className="relative z-10">
      <div className="fixed text-[15.1297px] box-border caret-transparent leading-[24.2075px] left-[0%] top-[0%] md:text-[15.667px] md:leading-[25.0672px] before:accent-auto before:caret-transparent before:text-white/70 before:table before:text-[15.1297px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[24.2075px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-space_grotesk before:md:text-[15.667px] before:md:leading-[25.0672px] after:accent-auto after:caret-transparent after:clear-both after:text-white/70 after:table after:text-[15.1297px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[24.2075px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-space_grotesk after:md:text-[15.667px] after:md:leading-[25.0672px]"></div>
      <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] overflow-hidden md:text-[15.667px] md:leading-[25.0672px]">
        <div className="relative text-[15.1297px] bg-no-repeat bg-cover box-border caret-transparent leading-[24.2075px] bg-[position:50%_0px] rounded-[7px] md:text-[15.667px] md:leading-[25.0672px]">
          <div className="absolute text-[15.1297px] aspect-[0_/_1] bg-[radial-gradient(circle,rgba(255,255,255,0.19)_1px,rgba(0,0,0,0)_0px)] bg-repeat-round bg-size-[60px_60px] box-border caret-transparent h-full leading-[24.2075px] min-h-[1000px] bg-center inset-[0%] md:text-[15.667px] md:leading-[25.0672px]"></div>
          <div className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px]">
            <Navbar />
            <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] overflow-hidden md:text-[15.667px] md:leading-[25.0672px]">
              <Hero />
            </div>
            <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] bg-[position:0px_0px] pt-[30px] md:text-[15.667px] md:leading-[25.0672px]">
              <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-[1248.2px] w-full mx-auto px-[25px] py-5 md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px]">
                <CaseStudiesCarousel />
              </div>
            </div>
            <ServicesSection />
            <ToolsSection />
            <AuditsStatsSection />
            <EducationSection />
            <TeamSection />
            <Footer />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
