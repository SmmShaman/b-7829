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
      titleKey: "section1.title",
      descriptionKey: "section1.description",
      icon: <BookOpen />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      backgroundImage: "/path-to-image-1.jpg",
    },
    {
      id: "2",
      titleKey: "section2.title",
      descriptionKey: "section2.description",
      icon: <Briefcase />,
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
      backgroundImage: "/path-to-image-2.jpg",
    },
    {
      id: "3",
      titleKey: "section3.title",
      descriptionKey: "section3.description",
      icon: <Wrench />,
      gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      backgroundImage: "/path-to-image-3.jpg",
    },
    {
      id: "4",
      titleKey: "section4.title",
      descriptionKey: "section4.description",
      icon: <BarChart2 />,
      gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      backgroundImage: "/path-to-image-4.jpg",
    },
    {
      id: "5",
      titleKey: "section5.title",
      descriptionKey: "section5.description",
      icon: <MessageSquare />,
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      backgroundImage: "/path-to-image-5.jpg",
    },
    {
      id: "6",
      titleKey: "section6.title",
      descriptionKey: "section6.description",
      icon: <Mail />,
      gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
      backgroundImage: "/path-to-image-6.jpg",
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
    <div className="grid grid-cols-3 gap-6 w-full max-w-6xl mx-auto h-[calc(100vh-40vh)] mt-16 mb-16 p-6">
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
