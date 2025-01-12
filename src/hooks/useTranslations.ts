import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState, useCallback } from "react";

export type Language = "EN" | "UA" | "NO";

export interface Translation {
  key: string;
  en_text: string;
  ua_text: string;
  no_text: string;
}

export const useTranslations = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("EN");

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

  const t = useCallback((key: string) => {
    if (!translations) return key;

    const translation = translations.find(t => t.key === key);
    if (!translation) return key;

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