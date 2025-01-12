import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

interface Section {
  id: string;
  title: string;
  content: string;
  gradient: string;
}

interface SectionDialogProps {
  openSection: string | null;
  onClose: () => void;
}

const SectionDialog = ({ openSection, onClose }: SectionDialogProps) => {
  const { t } = useTranslations();

  const sections: Section[] = [
    {
      id: "about",
      title: t("about"),
      content: t("about_content"),
      gradient: "linear-gradient(225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)"
    },
    {
      id: "projects",
      title: t("projects"),
      content: "",
      gradient: "linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)"
    },
    {
      id: "services",
      title: t("services"),
      content: t("services_content"),
      gradient: "linear-gradient(90deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%)"
    },
    {
      id: "skills",
      title: t("skills"),
      content: t("skills_content"),
      gradient: "linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%)"
    },
    {
      id: "testimonials",
      title: t("testimonials"),
      content: "",
      gradient: "linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)"
    },
    {
      id: "contact",
      title: t("contact"),
      content: t("contact_content"),
      gradient: "linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%)"
    },
  ];

  const currentSection = sections.find((s) => s.id === openSection);

  if (!currentSection) return null;

  return (
    <Dialog open={!!openSection} onOpenChange={onClose}>
      <DialogContent 
        className="w-full max-w-4xl mx-auto glass-effect"
        style={{
          background: currentSection.gradient,
        }}
      >
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center text-white">
            <span className="text-xl md:text-2xl font-bold">
              {currentSection.title}
            </span>
            <button
              onClick={onClose}
              className="hover:text-gray-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 text-white relative z-10 text-sm md:text-base">
          {currentSection.content}
        </div>
        <div className="absolute inset-0 bg-black/20 rounded-[2rem] z-0" />
      </DialogContent>
    </Dialog>
  );
};

export default SectionDialog;