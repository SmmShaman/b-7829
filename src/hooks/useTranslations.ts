import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState, useCallback, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

export type Language = "EN" | "UA" | "NO";

export interface Translation {
  key: string;
  en_text: string;
  ua_text: string;
  no_text: string;
}

export const useTranslations = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    return (savedLanguage as Language) || "EN";
  });

  const { data: translations, isLoading } = useQuery({
    queryKey: ["translations", currentLanguage],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("translations")
          .select("*");

        if (error) throw error;

        return data as Translation[];
      } catch (error) {
        console.error("Error fetching translations:", error);
        toast({
          title: "Error loading translations",
          description: "Please try again later",
          variant: "destructive",
        });
        return [];
      }
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  const handleLanguageChange = useCallback((newLanguage: Language) => {
    if (newLanguage !== currentLanguage) {
      setCurrentLanguage(newLanguage);
      localStorage.setItem("preferredLanguage", newLanguage);
      // Force a refresh of the translations
      queryClient.invalidateQueries({ queryKey: ["translations"] });
      
      toast({
        title: `Language changed to ${newLanguage}`,
        duration: 2000,
      });
    }
  }, [currentLanguage, queryClient, toast]);

  const t = useCallback((key: string) => {
    if (!translations) return key;

    const translation = translations.find(t => t.key === key);
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }

    switch (currentLanguage.toLowerCase()) {
      case "en":
        return translation.en_text;
      case "ua":
        return translation.ua_text;
      case "no":
        return translation.no_text;
      default:
        return translation.en_text;
    }
  }, [translations, currentLanguage]);

  // Effect to handle initial language detection
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language;
    if (savedLanguage && savedLanguage !== currentLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  return {
    t,
    currentLanguage,
    setCurrentLanguage: handleLanguageChange,
    isLoading
  };
};