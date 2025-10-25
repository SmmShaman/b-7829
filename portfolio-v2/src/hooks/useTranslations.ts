import { useState } from "react";
import { translations } from "@/utils/translations";

export type Language = "NO" | "EN" | "UA";

export const useTranslations = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("EN");
  const [isLoading] = useState(false);

  const t = (key: keyof typeof translations.en) => {
    const lang = currentLanguage.toLowerCase() as keyof typeof translations;
    return translations[lang][key] || translations.en[key];
  };

  return { t, currentLanguage, setCurrentLanguage, isLoading };
};
