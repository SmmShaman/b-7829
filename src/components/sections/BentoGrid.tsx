import { BookOpen, Briefcase, Wrench, BarChart2, MessageSquare, Mail } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { useEffect, useRef } from "react";

interface Section {
  id: string;
  title: string;
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
      title: t("about"),
      icon: <BookOpen className="w-8 h-8" />,
      gradient: "linear-gradient(225deg, rgba(255,226,159,0.1) 0%, rgba(255,169,159,0.1) 48%, rgba(255,113,154,0.1) 100%)"
    },
    {
      id: "services",
      title: t("services"),
      icon: <Wrench className="w-8 h-8" />,
      gradient: "linear-gradient(90deg, rgba(255,200,169,0.1) 0%, rgba(236,106,140,0.1) 100%)"
    },
    {
      id: "skills",
      title: t("skills"),
      icon: <BarChart2 className="w-8 h-8" />,
      gradient: "linear-gradient(102.3deg, rgba(147,39,143,0.1) 5.9%, rgba(234,172,232,0.1) 64%)"
    },
    {
      id: "projects",
      title: t("projects"),
      icon: <Briefcase className="w-8 h-8" />,
      gradient: "linear-gradient(90deg, rgba(157,178,217,0.1) 0%, rgba(24,54,126,0.1) 100%)"
    },
    {
      id: "testimonials",
      title: t("testimonials"),
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: "linear-gradient(90deg, rgba(136,219,159,0.1) 0%, rgba(229,236,121,0.1) 100%)"
    },
    {
      id: "contact",
      title: t("contact"),
      icon: <Mail className="w-8 h-8" />,
      gradient: "linear-gradient(90deg, rgba(252,180,103,0.1) 0%, rgba(247,129,129,0.1) 100%)"
    }
  ];

  const handleCardClick = async (sectionId: string, index: number) => {
    const clickedCard = cardRefs.current.get(sectionId);
    if (!clickedCard) return;

    clickedCard.classList.add('snake-animation');
    
    const cards = Array.from(cardRefs.current.values());
    const positions = cards.map(card => {
      const rect = card.getBoundingClientRect();
      return { x: rect.left, y: rect.top };
    });

    const snakeOrder = [0, 1, 2, 5, 4, 3];
    
    for (const orderIndex of snakeOrder) {
      if (orderIndex === index) continue;
      
      const pos = positions[orderIndex];
      const startPos = positions[index];
      clickedCard.style.transform = `translate(${pos.x - startPos.x}px, ${pos.y - startPos.y}px)`;
      cards[orderIndex].classList.add('eaten');
      
      await new Promise(resolve => setTimeout(resolve, 400));
    }

    clickedCard.style.transform = 'translate(0, 0)';
    await new Promise(resolve => setTimeout(resolve, 400));

    onSectionClick(sectionId);
  };

  useEffect(() => {
    if (!expandingCard) {
      cardRefs.current.forEach(card => {
        card.classList.remove('snake-animation', 'snake-expanded', 'eaten');
        card.style.transform = '';
      });
    }
  }, [expandingCard]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[80vw] mx-auto my-auto" style={{ minHeight: '60vh' }}>
      {sections.map((section, index) => (
        <div
          key={section.id}
          ref={el => el && cardRefs.current.set(section.id, el)}
          className="relative overflow-hidden rounded-[2rem] aspect-square cursor-pointer transform transition-transform duration-300"
          onClick={() => handleCardClick(section.id, index)}
          style={{
            background: section.gradient,
          }}
        >
          <div className="absolute inset-0 bg-black/90" />
          <div className="relative h-full p-6 flex flex-col items-center justify-center text-white">
            <div className="mb-4">
              {section.icon}
            </div>
            <h2 className="text-2xl font-bold">
              {section.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;