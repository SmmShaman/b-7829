import { useTranslations } from "@/hooks/useTranslations";

interface SectionDialogProps {
  openSection: string | null;
  onClose: () => void;
}

const SectionDialog = ({ openSection }: SectionDialogProps) => {
  const { t } = useTranslations();

  if (!openSection) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-8 overflow-y-auto">
      <div className="w-full max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <div className="text-lg leading-relaxed">
            {t(`${openSection}_content`)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDialog;