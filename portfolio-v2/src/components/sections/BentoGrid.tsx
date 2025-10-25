import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

interface BentoGridProps {
  onSectionClick: (sectionId: string) => void;
  expandingCard: string | null;
}

const BentoGrid: React.FC<BentoGridProps> = ({ onSectionClick, expandingCard }) => {
  const { t } = useTranslations();

  const sections = [
    {
      id: "about",
      title: t("about"),
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      id: "projects",
      title: t("projects"),
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "services",
      title: t("services"),
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      id: "skills",
      title: t("skills"),
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "testimonials",
      title: t("testimonials"),
      bgImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      id: "contact",
      title: t("contact"),
      bgImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      gradient: "from-fuchsia-500/20 to-pink-500/20"
    },
  ];

  return (
    <div className="container px-4 h-[calc(100vh-33.3vh)] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className={`glass-card relative rounded-2xl cursor-pointer transition-all duration-300 h-[calc((100vh-33.3vh-4rem)/2)] flex flex-col justify-center overflow-hidden group border-2 border-white/10 hover:border-cyan-400/50 ${
              expandingCard === section.id ? "snake-animation snake-expanded" : ""
            }`}
            onClick={() => onSectionClick(section.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url(${section.bgImage})`,
                opacity: 0.3
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient}`} />

            <div className="relative flex items-center justify-center h-full w-full p-6 z-10">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                {section.title}
              </h3>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse-slow" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
