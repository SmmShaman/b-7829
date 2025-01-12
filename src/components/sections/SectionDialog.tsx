import { useTranslations } from "@/hooks/useTranslations";
import { X } from "lucide-react";

interface SectionDialogProps {
  openSection: string | null;
  onClose: () => void;
}

const SectionDialog = ({ openSection, onClose }: SectionDialogProps) => {
  const { t } = useTranslations();

  if (!openSection) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-8">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-4xl bg-card rounded-[2rem] p-8 z-50 animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {t(openSection)}
          </h2>
          <div className="text-lg leading-relaxed text-white/90">
            {t(`${openSection}_content`)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDialog;