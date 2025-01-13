import { useTranslations } from "@/hooks/useTranslations";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ContactForm from "./ContactForm";

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

  const getTitleKey = (section: string): keyof typeof translations.en => {
    switch (section) {
      case "about":
        return "about_title";
      case "projects":
        return "projects_title";
      case "services":
        return "services_title";
      case "skills":
        return "skills_title";
      case "testimonials":
        return "testimonials_title";
      case "contact":
        return "contact_title";
      default:
        return "title";
    }
  };

  const getContentKey = (section: string): keyof typeof translations.en => {
    switch (section) {
      case "about":
        return "about_content";
      case "projects":
        return "projects_content";
      case "services":
        return "services_content";
      case "skills":
        return "skills_content";
      case "testimonials":
        return "testimonials_content";
      case "contact":
        return "contact_description";
      default:
        return "description";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose} 
      />
      <div className="relative w-full max-w-4xl h-[calc(100vh-33.3vh)] mx-4 bg-card rounded-[2rem] shadow-2xl overflow-hidden animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          aria-label={t("close")}
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        <ScrollArea className="h-full w-full">
          <div className="flex p-8 h-full">
            <div className="w-1/3 animate-slide-right relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img 
                src={getSectionImage(openSection)}
                alt={t(getTitleKey(openSection))}
                className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
            <div className="flex-1 pl-8">
              {openSection === "contact" ? (
                <ContactForm />
              ) : (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    {t(getTitleKey(openSection))}
                  </h2>
                  <div className="text-lg leading-relaxed text-white/90 whitespace-pre-line">
                    {t(getContentKey(openSection))}
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