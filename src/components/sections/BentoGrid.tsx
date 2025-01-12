import { BookOpen, Briefcase, Wrench, BarChart2, MessageSquare, Mail } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { useEffect, useRef } from "react";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
  image: string;
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
      content: t("about_content"),
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800",
      gradient: "linear-gradient(225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)"
    },
    {
      id: "projects",
      title: t("projects"),
      icon: <Briefcase className="w-8 h-8" />,
      content: "",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
      gradient: "linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)"
    },
    {
      id: "services",
      title: t("services"),
      icon: <Wrench className="w-8 h-8" />,
      content: t("services_content"),
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
      gradient: "linear-gradient(90deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%)"
    },
    {
      id: "skills",
      title: t("skills"),
      icon: <BarChart2 className="w-8 h-8" />,
      content: t("skills_content"),
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
      gradient: "linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%)"
    },
    {
      id: "testimonials",
      title: t("testimonials"),
      icon: <MessageSquare className="w-8 h-8" />,
      content: "",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
      gradient: "linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)"
    },
    {
      id: "contact",
      title: t("contact"),
      icon: <Mail className="w-8 h-8" />,
      content: t("contact_content"),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
      gradient: "linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%)"
    },
  ];

  const handleCardClick = async (sectionId: string, index: number) => {
    const clickedCard = cardRefs.current.get(sectionId);
    if (!clickedCard) return;

    // Start snake animation
    clickedCard.classList.add('snake-animation');
    
    // Calculate positions for clockwise snake movement
    const cards = Array.from(cardRefs.current.values());
    const positions = cards.map(card => {
      const rect = card.getBoundingClientRect();
      return { x: rect.left, y: rect.top };
    });

    // Define clockwise order based on grid layout (2x3 grid)
    const clockwiseOrder = [0, 1, 2, 5, 4, 3];
    
    // Animate through each card position in clockwise order
    for (const orderIndex of clockwiseOrder) {
      if (orderIndex === index) continue;
      
      const pos = positions[orderIndex];
      const startPos = positions[index];
      clickedCard.style.transform = `translate(${pos.x - startPos.x}px, ${pos.y - startPos.y}px)`;
      cards[orderIndex].classList.add('eaten');
      
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    // Move to top-left corner
    clickedCard.style.transform = 'translate(0, 0)';
    await new Promise(resolve => setTimeout(resolve, 300));

    // Final diagonal expansion animation
    clickedCard.classList.add('snake-expanded');

    // Trigger the section change
    setTimeout(() => {
      onSectionClick(sectionId);
    }, 800);
  };

  useEffect(() => {
    if (!expandingCard) {
      // Reset all cards when closing
      cardRefs.current.forEach(card => {
        card.classList.remove('snake-animation', 'snake-expanded', 'eaten');
        card.style.transform = '';
      });
    }
  }, [expandingCard]);

  return (
    <div className="bento-grid">
      {sections.map((section, index) => (
        <div
          key={section.id}
          ref={el => el && cardRefs.current.set(section.id, el)}
          className="bento-card"
          onClick={() => handleCardClick(section.id, index)}
          style={{
            background: section.gradient,
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-[2rem] transition-opacity group-hover:opacity-30" />
          <img 
            src={section.image} 
            alt={section.title} 
            className="bento-card-image"
          />
          <div className="bento-card-content">
            <div className="text-white">
              {section.icon}
            </div>
            <h2 className="text-xl font-bold mt-4 text-white drop-shadow-lg">
              {section.title}
            </h2>
            <p className="mt-2 text-sm text-white/90 line-clamp-2">
              {section.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;