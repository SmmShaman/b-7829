import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BentoGrid from "@/components/sections/BentoGrid";
import SectionDialog from "@/components/sections/SectionDialog";
import ParticlesBackground from "@/components/background/ParticlesBackground";

const Index = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [expandingCard, setExpandingCard] = useState<string | null>(null);
  const { isLoading } = useTranslations();

  const handleCardClick = (sectionId: string) => {
    setExpandingCard(sectionId);
    setTimeout(() => {
      setOpenSection(sectionId);
      setExpandingCard(null);
    }, 600);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white">
      <ParticlesBackground />
      <Header />
      
      <main className="flex-grow mt-[25vh] pb-[15vh]">
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