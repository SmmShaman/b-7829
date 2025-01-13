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
      content: t("about_content"),
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      id: "projects",
      title: t("projects"),
      content: t("projects_content"),
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      id: "services",
      title: t("services"),
      content: t("services_content"),
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },
    {
      id: "skills",
      title: t("skills"),
      content: t("skills_content"),
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
      id: "testimonials",
      title: t("testimonials"),
      content: t("testimonials_content"),
      bgImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    },
    {
      id: "contact",
      title: t("contact"),
      content: null,
      bgImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      customContent: <ContactForm />,
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
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${section.bgImage})`,
                opacity: 0.5
              }}
            />
            <div className="relative flex items-center justify-center h-full w-full p-6">
              <h3 className="text-3xl font-bold text-white">{section.title}</h3>
            </div>
            {section.customContent}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;