import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";
import MapSection from "./MapSection";
import ClockSection from "./ClockSection";
import QuoteSection from "./QuoteSection";

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
      description: t("about_description"),
      content: null,
    },
    {
      id: "projects",
      title: t("projects"),
      description: t("projects_description"),
      content: null,
    },
    {
      id: "schedule",
      title: t("schedule"),
      description: t("schedule_description"),
      content: <ClockSection />,
    },
    {
      id: "quote",
      title: t("quote"),
      description: t("quote_description"),
      content: <QuoteSection />,
    },
    {
      id: "location",
      title: t("location") || "Location",
      description: t("location_description") || "Find me here",
      content: <MapSection />,
    },
    {
      id: "contact",
      title: t("contact"),
      description: t("contact_description"),
      content: null,
    },
  ];

  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            className={`relative bg-card hover:bg-card-hover rounded-lg p-6 cursor-pointer transition-colors ${
              expandingCard === section.id ? "snake-animation snake-expanded" : ""
            }`}
            onClick={() => onSectionClick(section.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-2">{section.title}</h3>
            <p className="text-gray-400 mb-4">{section.description}</p>
            {section.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;