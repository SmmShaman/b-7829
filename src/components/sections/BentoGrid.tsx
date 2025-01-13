import { BookOpen, Briefcase, Wrench, BarChart2, MessageSquare, Mail } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { useEffect, useRef } from "react";

interface Section {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: React.ReactNode;
  gradient: string;
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
      gradient: "linear-gradient(225deg, rgba(255,226,159,0.05) 0%, rgba(255,169,159,0.05) 48%, rgba(255,113,154,0.05) 100%)"
    },
    {
      id: "services",
      titleKey: "services_title",
      descriptionKey: "services_content",
      icon: <Wrench className="w-8 h-8" />,
      gradient: "linear-gradient(90deg, rgba(255,200,169,0.05) 0%, rgba(236,106,140,0.05) 100%)"
    },
    {
      id: "skills",
      titleKey: "skills_title",
      descriptionKey: "skills_content",
      icon: <BarChart2 className="w-8 h-8" />,
      gradient: "linear-gradient(102.3deg, rgba(147,39,143,0.05) 5.9%, rgba(234,172,232,0.05) 64%)"
    },
    {
      id: "projects",
      titleKey: "projects_title",
      descriptionKey: "projects_content",
      icon: <Briefcase className="w-8 h-8" />,
      gradient: "linear-gradient(90deg, rgba(157,178,217,0.05) 0%, rgba(24,54,126,0.05) 100%)"
    },
    {
      id: "testimonials",
      titleKey: "testimonials_title",
      descriptionKey: "testimonials_content",
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: "linear-gradient(90deg, rgba(136,219,159,0.05) 0%, rgba(229,236,121,0.05) 100%)"
    },
    {
      id: "contact",
      titleKey: "contact_title",
      descriptionKey: "contact_content",
      icon: <Mail className="w-8 h-8" />,
      gradient: "linear-gradient(90deg, rgba(252,180,103,0.05) 0%, rgba(247,129,129,0.05) 100%)"
    }
  ];

  const handleCardClick = async (sectionId: string, index: number) => {
    const clickedCard = cardRefs.current.get(sectionId);
    if (!clickedCard) return;

    // Add fade-out animation to non-clicked cards
    cardRefs.current.forEach((card, id) => {
      if (id !== sectionId) {
        card.style.animation = 'fadeOut 0.5s ease-out forwards';
        card.style.opacity = '0';
      }
    });

    // Add expand animation to clicked card
    clickedCard.style.animation = 'expandCard 0.8s ease-out forwards';
    
    // Wait for animations to complete
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[80vw] mx-auto h-[calc(100vh-40vh)] mt-[20vh] mb-[20vh]">
      {sections.map((section, index) => (
        <div
          key={section.id}
          ref={el => el && cardRefs.current.set(section.id, el)}
          className="relative overflow-hidden rounded-[2rem] aspect-square cursor-pointer transform transition-all duration-300 hover:scale-105 border border-gray-800"
          onClick={() => handleCardClick(section.id, index)}
          style={{
            background: section.gradient,
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
          <div className="relative h-full p-6 flex flex-col items-center justify-center text-white">
            <div className="mb-4 transform transition-transform group-hover:scale-110">
              {section.icon}
            </div>
            <h2 className="text-2xl font-bold text-center">
              {t(section.titleKey)}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;