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
      id: "1",
      titleKey: "about",
      descriptionKey: "aboutContent",
      icon: <BookOpen className="w-6 h-6 md:w-8 md:h-8" />,
      gradient: "linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)",
      backgroundImage: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "2",
      titleKey: "projects",
      descriptionKey: "projectsContent",
      icon: <Briefcase className="w-6 h-6 md:w-8 md:h-8" />,
      gradient: "linear-gradient(135deg, rgba(255, 154, 158, 0.8) 0%, rgba(250, 208, 196, 0.8) 100%)",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "3",
      titleKey: "services",
      descriptionKey: "servicesContent",
      icon: <Wrench className="w-6 h-6 md:w-8 md:h-8" />,
      gradient: "linear-gradient(135deg, rgba(246, 211, 101, 0.8) 0%, rgba(253, 160, 133, 0.8) 100%)",
      backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "4",
      titleKey: "skills",
      descriptionKey: "skillsContent",
      icon: <BarChart2 className="w-6 h-6 md:w-8 md:h-8" />,
      gradient: "linear-gradient(135deg, rgba(161, 140, 209, 0.8) 0%, rgba(251, 194, 235, 0.8) 100%)",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "5",
      titleKey: "testimonials",
      descriptionKey: "testimonialsContent",
      icon: <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />,
      gradient: "linear-gradient(135deg, rgba(255, 236, 210, 0.8) 0%, rgba(252, 182, 159, 0.8) 100%)",
      backgroundImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "6",
      titleKey: "contact",
      descriptionKey: "contactContent",
      icon: <Mail className="w-6 h-6 md:w-8 md:h-8" />,
      gradient: "linear-gradient(135deg, rgba(137, 247, 254, 0.8) 0%, rgba(102, 166, 255, 0.8) 100%)",
      backgroundImage: "https://images.unsplash.com/photo-1512626120412-faf41adb4874?q=80&w=1000&auto=format&fit=crop",
    },
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
    <div className="flex items-start justify-start h-[calc(100vh-12rem)] w-full px-4 md:px-6 lg:px-8 mb-24 overflow-y-auto md:overflow-visible md:items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full max-w-7xl mx-auto py-6 md:py-0">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={el => el && cardRefs.current.set(section.id, el)}
            className="relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-800/20 shadow-xl bg-card/50 aspect-[4/3] w-full"
            onClick={() => handleCardClick(section.id, index)}
            style={{
              backgroundImage: `url(${section.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            }}
          >
            <div 
              className="absolute inset-0 backdrop-blur-[2px]" 
              style={{ background: section.gradient }} 
            />
            <div className="relative h-full p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center text-white">
              <div className="mb-3 md:mb-4 transform transition-transform group-hover:scale-110 bg-white/20 p-3 md:p-4 rounded-full">
                {section.icon}
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-2 md:mb-3">
                {t(section.titleKey)}
              </h2>
              <p className="text-sm md:text-base text-center text-white/90 line-clamp-3 max-w-[90%] mx-auto">
                {t(section.descriptionKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
