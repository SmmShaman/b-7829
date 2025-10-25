import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BentoGrid from "@/components/sections/BentoGrid";
import SectionDialog from "@/components/sections/SectionDialog";
import ParticlesBackground from "@/components/background/ParticlesBackground";

const Index = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [expandingCard, setExpandingCard] = useState<string | null>(null);

  const handleCardClick = (sectionId: string) => {
    setExpandingCard(sectionId);
    setTimeout(() => {
      setOpenSection(sectionId);
      setExpandingCard(null);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-hidden">
      <ParticlesBackground />
      <Header />

      <main className="flex-grow mt-[25vh] pb-[10vh]">
        <BentoGrid
          onSectionClick={handleCardClick}
          expandingCard={expandingCard}
        />
      </main>

      <Footer />

      <SectionDialog
        openSection={openSection}
        onClose={() => setOpenSection(null)}
      />
    </div>
  );
};

export default Index;
