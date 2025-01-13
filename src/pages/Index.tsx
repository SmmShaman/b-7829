import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BentoGrid from "@/components/sections/BentoGrid";
import SectionDialog from "@/components/sections/SectionDialog";

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
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      
      {/* Main Content with Padding */}
      <main className="flex-grow flex items-center justify-center mt-[20vh] mb-[10vh]">
        <BentoGrid 
          onSectionClick={handleCardClick}
          expandingCard={expandingCard}
        />
      </main>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </div>

      <SectionDialog 
        openSection={openSection}
        onClose={() => setOpenSection(null)}
      />
    </div>
  );
};

export default Index;