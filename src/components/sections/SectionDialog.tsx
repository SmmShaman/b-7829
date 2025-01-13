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
        return "/images/professional-headshot.jpg";
      case "services":
        return "/images/services-bg.jpg";
      case "skills":
        return "/images/skills-bg.jpg";
      case "projects":
        return "/images/projects-bg.jpg";
      case "testimonials":
        return "/images/testimonials-bg.jpg";
      case "contact":
        return "/images/contact-bg.jpg";
      default:
        return "";
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
            <div className="w-1/4 animate-slide-in-right">
              <div className="relative h-full">
                <img 
                  src={getSectionImage(openSection)}
                  alt={t(`${openSection}_title`)}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out transform translate-x-0"
                />
              </div>
            </div>
            <div className="flex-1 pl-8">
              {openSection === "contact" ? (
                <ContactForm />
              ) : (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    {t(`${openSection}_title`)}
                  </h2>
                  <div className="text-lg leading-relaxed text-white/90">
                    {t(`${openSection}_content`)}
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