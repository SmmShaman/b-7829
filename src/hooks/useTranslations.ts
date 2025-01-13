import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState, useCallback, useEffect } from "react";

export type Language = "EN" | "UA" | "NO";

export interface Translation {
  key: string;
  en_text: string;
  ua_text: string;
  no_text: string;
}

export const useTranslations = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    return (savedLanguage as Language) || "EN";
  });

  const { data: translations, isLoading } = useQuery({
    queryKey: ["translations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("translations")
        .select("*");

      if (error) {
        console.error("Error fetching translations:", error);
        return [];
      }

      return data as Translation[];
    }
  });

  useEffect(() => {
    localStorage.setItem("preferredLanguage", currentLanguage);
  }, [currentLanguage]);

  const t = useCallback((key: string) => {
    if (!translations) return key;

    const translation = translations.find(t => t.key === key);
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }

    switch (currentLanguage) {
      case "EN":
        return translation.en_text;
      case "UA":
        return translation.ua_text;
      case "NO":
        return translation.no_text;
      default:
        return translation.en_text;
    }
  }, [translations, currentLanguage]);

  return {
    t,
    currentLanguage,
    setCurrentLanguage,
    isLoading
  };
};