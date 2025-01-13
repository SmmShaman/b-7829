import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState, useCallback, useEffect } from "react";

export type Language = "EN" | "UA" | "NO";

export interface Translation {
  key: string;
  en_text: string;
  ua_text: string;
  no_text: string;
  ru_text?: string;
}

export const useTranslations = () => {
  const queryClient = useQueryClient();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    return (savedLanguage as Language) || "EN";
  });

  const { data: translations, isLoading } = useQuery({
    queryKey: ["translations", currentLanguage],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("translations")
        .select("*");

      if (error) {
        console.error("Error fetching translations:", error);
        return [];
      }

      return data as Translation[];
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  const handleLanguageChange = useCallback((newLanguage: Language) => {
    if (newLanguage !== currentLanguage) {
      setCurrentLanguage(newLanguage);
      localStorage.setItem("preferredLanguage", newLanguage);
      // Invalidate the translations query to force a refresh
      queryClient.invalidateQueries({ queryKey: ["translations"] });
    }
  }, [currentLanguage, queryClient]);

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
    setCurrentLanguage: handleLanguageChange,
    isLoading
  };
};