import { useTranslations } from "@/hooks/useTranslations";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SectionDialogProps {
  openSection: string | null;
  onClose: () => void;
}

const SectionDialog = ({ openSection, onClose }: SectionDialogProps) => {
  const { t } = useTranslations();

  if (!openSection) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose} 
      />
      <div className="relative w-full max-w-4xl bg-card rounded-[2rem] shadow-2xl overflow-hidden animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        <ScrollArea className="h-[80vh] w-full">
          <div className="p-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-white">
                {t(openSection)}
              </h2>
              <div className="text-lg leading-relaxed text-white/90">
                {t(`${openSection}_content`)}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SectionDialog;