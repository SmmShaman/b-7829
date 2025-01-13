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
            className={`relative bg-card hover:bg-card-hover rounded-lg p-6 cursor-pointer transition-colors h-[calc((100vh-33.3vh-4rem)/2)] flex flex-col justify-between ${
              expandingCard === section.id ? "snake-animation snake-expanded" : ""
            }`}
            onClick={() => onSectionClick(section.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{section.title}</h3>
              <p className="text-gray-400">{section.description}</p>
            </div>
            {section.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;