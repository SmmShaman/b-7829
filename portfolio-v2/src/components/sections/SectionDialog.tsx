import { useTranslations } from "@/hooks/useTranslations";
import { translations } from "@/utils/translations";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ContactForm from "./ContactForm";

type SectionType = "about" | "projects" | "services" | "skills" | "testimonials" | "contact";

interface SectionDialogProps {
  openSection: string | null;
  onClose: () => void;
}

const SectionDialog = ({ openSection, onClose }: SectionDialogProps) => {
  const { t } = useTranslations();

  if (!openSection) return null;

  const getSectionImage = (section: string) => {
    switch (section) {
      case "about":
        return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158";
      case "projects":
        return "https://images.unsplash.com/photo-1460925895917-afdab827c52f";
      case "services":
        return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40";
      case "skills":
        return "https://images.unsplash.com/photo-1516321318423-f06f85e504b3";
      case "testimonials":
        return "https://images.unsplash.com/photo-1521791136064-7986c2920216";
      case "contact":
        return "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
      default:
        return "";
    }
  };

  const getTitleKey = (section: SectionType) => {
    const keys = {
      about: "about_title",
      projects: "projects_title",
      services: "services_title",
      skills: "skills_title",
      testimonials: "testimonials_title",
      contact: "contact_title"
    } as const;

    return keys[section] as keyof typeof translations.en;
  };

  const getContentKey = (section: SectionType) => {
    const keys = {
      about: "about_content",
      projects: "projects_content",
      services: "services_content",
      skills: "skills_content",
      testimonials: "testimonials_content",
      contact: "contact_description"
    } as const;

    return keys[section] as keyof typeof translations.en;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl h-[calc(100vh-33.3vh)] mx-4 glass-card neon-border rounded-[2rem] shadow-2xl overflow-hidden animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full glass-card border border-white/20 hover:bg-white/10 transition-all z-10 hover:scale-110"
          aria-label={t("close")}
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <ScrollArea className="h-full w-full">
          <div className="flex p-8 h-full">
            <div className="w-1/3 animate-slide-right relative overflow-hidden rounded-lg border-2 border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img
                src={getSectionImage(openSection)}
                alt={t(getTitleKey(openSection as SectionType))}
                className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
            <div className="flex-1 pl-8">
              {openSection === "contact" ? (
                <ContactForm />
              ) : (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    {t(getTitleKey(openSection as SectionType))}
                  </h2>
                  <div className="text-lg leading-relaxed text-gray-200 whitespace-pre-line">
                    {t(getContentKey(openSection as SectionType))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SectionDialog;
