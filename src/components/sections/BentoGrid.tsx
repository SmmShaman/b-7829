import { BookOpen, Briefcase, Wrench, BarChart2, MessageSquare, Mail } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { useEffect, useRef } from "react";

interface Section {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: React.ReactNode;
  gradient: string;
  backgroundImage: string;
}

interface BentoGridProps {
  onSectionClick: (sectionId: string) => void;
  expandingCard: string | null;
}

const BentoGrid = ({ onSectionClick, expandingCard }: BentoGridProps) => {
  const { t } = useTranslations();
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const sections: Section[] = [
    {
      id: "about",
      titleKey: "about_title",
      descriptionKey: "about_content",
      icon: <BookOpen className="w-8 h-8" />,
      gradient: "linear-gradient(225deg, rgba(255,226,159,0.85) 0%, rgba(255,169,159,0.85) 48%, rgba(255,113,154,0.85) 100%)",
      backgroundImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "services",
      titleKey: "services_title",
      descriptionKey: "services_content",
      icon: <Wrench className="w-8 h-8" />,
      gradient: "linear-gradient(90deg, rgba(255,200,169,0.85) 0%, rgba(236,106,140,0.85) 100%)",
      backgroundImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "skills",
      titleKey: "skills_title",
      descriptionKey: "skills_content",
      icon: <BarChart2 className="w-8 h-8" />,
      gradient: "linear-gradient(102.3deg, rgba(147,39,143,0.85) 5.9%, rgba(234,172,232,0.85) 64%)",
      backgroundImage: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "projects",
      titleKey: "projects_title",
      descriptionKey: "projects_content",
      icon: <Briefcase className="w-8 h-8" />,
      gradient: "linear-gradient(90deg, rgba(157,178,217,0.85) 0%, rgba(24,54,126,0.85) 100%)",
      backgroundImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "testimonials",
      titleKey: "testimonials_title",
      descriptionKey: "testimonials_content",
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: "linear-gradient(90deg, rgba(136,219,159,0.85) 0%, rgba(229,236,121,0.85) 100%)",
      backgroundImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "contact",
      titleKey: "contact_title",
      descriptionKey: "contact_content",
      icon: <Mail className="w-8 h-8" />,
      gradient: "linear-gradient(90deg, rgba(252,180,103,0.85) 0%, rgba(247,129,129,0.85) 100%)",
      backgroundImage: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const handleCardClick = async (sectionId: string, index: number) => {
    const clickedCard = cardRefs.current.get(sectionId);
    if (!clickedCard) return;

    cardRefs.current.forEach((card, id) => {
      if (id !== sectionId) {
        card.style.animation = 'fadeOut 0.5s ease-out forwards';
        card.style.opacity = '0';
      }
    });

    clickedCard.style.animation = 'expandCard 0.8s ease-out forwards';
    
    await new Promise(resolve => setTimeout(resolve, 800));
    onSectionClick(sectionId);
  };

  useEffect(() => {
    if (!expandingCard) {
      cardRefs.current.forEach(card => {
        card.style.animation = '';
        card.style.opacity = '1';
        card.style.transform = '';
      });
    }
  }, [expandingCard]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-[85vw] max-w-7xl mx-auto h-[calc(100vh-40vh)] mt-[15vh] mb-[15vh] p-8">
      {sections.map((section, index) => (
        <div
          key={section.id}
          ref={el => el && cardRefs.current.set(section.id, el)}
          className="relative overflow-hidden rounded-[2rem] aspect-square cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-800/20 shadow-lg"
          onClick={() => handleCardClick(section.id, index)}
          style={{
            backgroundImage: `url(${section.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
          }}
        >
          <div 
            className="absolute inset-0" 
            style={{ 
              background: section.gradient,
              backdropFilter: 'blur(8px)',
            }} 
          />
          <div className="relative h-full p-10 flex flex-col items-center justify-center text-white">
            <div className="mb-8 transform transition-transform group-hover:scale-110 bg-white/10 p-5 rounded-full">
              {section.icon}
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">
              {t(section.titleKey)}
            </h2>
            <p className="text-sm text-center text-white/90">
              {t(section.descriptionKey)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;