import { useState, useCallback, useEffect } from "react";
import { translations } from "@/utils/translations";
import { useToast } from "@/components/ui/use-toast";

export type Language = "EN" | "UA" | "NO";

export const useTranslations = () => {
  const { toast } = useToast();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    return (savedLanguage as Language) || "EN";
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleLanguageChange = useCallback((newLanguage: Language) => {
    if (newLanguage !== currentLanguage) {
      setCurrentLanguage(newLanguage);
      localStorage.setItem("preferredLanguage", newLanguage);
      
      toast({
        title: `Language changed to ${newLanguage}`,
        duration: 2000,
      });
    }
  }, [currentLanguage, toast]);

  const t = useCallback((key: string) => {
    const langKey = currentLanguage.toLowerCase() as keyof typeof translations;
    const translation = translations[langKey]?.[key as keyof typeof translations.en];
    
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }

    return translation;
  }, [currentLanguage]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language;
    if (savedLanguage && savedLanguage !== currentLanguage) {
      setCurrentLanguage(savedLanguage);
    }
    setIsLoading(false);
  }, []);

  return {
    t,
    currentLanguage,
    setCurrentLanguage: handleLanguageChange,
    isLoading
  };
};