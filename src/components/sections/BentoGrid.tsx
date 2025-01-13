import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";
import ContactForm from "./ContactForm";

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
      content: null,
    },
    {
      id: "projects",
      title: t("projects"),
      description: t("projects_description"),
      content: null,
    },
    {
      id: "services",
      title: t("services"),
      description: t("services_description"),
      content: null,
    },
    {
      id: "skills",
      title: t("skills"),
      description: t("skills_description"),
      content: null,
    },
    {
      id: "testimonials",
      title: t("testimonials"),
      description: t("testimonials_description"),
      content: null,
    },
    {
      id: "contact",
      title: t("contact"),
      description: t("contact_description"),
      content: <ContactForm />,
    },
  ];

  return (
    <div className="container px-4 h-[calc(100vh-33.3vh)] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            className={`relative bg-card hover:bg-card-hover rounded-lg cursor-pointer transition-colors h-[calc((100vh-33.3vh-4rem)/2)] flex flex-col justify-between overflow-hidden ${
              expandingCard === section.id ? "snake-animation snake-expanded" : ""
            }`}
            onClick={() => onSectionClick(section.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {section.bgImage && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${section.bgImage})`,
                  opacity: 0.5
                }}
              />
            )}
            <div className="relative flex items-center justify-center h-full w-full p-6">
              {section.id === "about" ? (
                <h3 className="text-3xl font-bold text-white">{section.title}</h3>
              ) : (
                <div>
                  <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                  <p className="text-gray-400">{section.description}</p>
                </div>
              )}
            </div>
            {section.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;