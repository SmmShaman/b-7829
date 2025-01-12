import { useTranslations } from "@/hooks/useTranslations";

interface SectionDialogProps {
  openSection: string | null;
  onClose: () => void;
}

const SectionDialog = ({ openSection }: SectionDialogProps) => {
  const { t } = useTranslations();

  if (!openSection) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="w-full h-full p-8 overflow-auto">
        <div className="text-white">
          <h1 className="text-3xl font-bold mb-6">{t(`${openSection}_title`)}</h1>
          <div className="prose prose-invert max-w-none">
            {t(`${openSection}_content`)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDialog;