import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState, useCallback } from "react";

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
    staleTime: 0, // Disable caching to ensure fresh data
  });

  const handleLanguageChange = useCallback((newLanguage: Language) => {
    if (newLanguage !== currentLanguage) {
      setCurrentLanguage(newLanguage);
      localStorage.setItem("preferredLanguage", newLanguage);
      // Force a refresh of the translations
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

export const translations = {
  en: {
    about: "About",
    about_description: "Learn more about me",
    projects: "Projects",
    projects_description: "Check out my work",
    services: "Services",
    services_description: "What I can offer",
    skills: "Skills",
    skills_description: "My expertise",
    testimonials: "Testimonials",
    testimonials_description: "What others say about me",
    location: "Location",
    location_description: "Find me here",
    contact: "Contact",
    contact_description: "Get in touch",
    schedule: "Schedule & Status",
    schedule_description: "My working hours and availability",
    quote: "Quote of the Day",
    quote_description: "Daily inspiration",
    status_working: "Currently Working",
    status_available: "Available",
    status_resting: "Resting",
  },
  no: {
    about: "Om",
    about_description: "Lær mer om meg",
    projects: "Prosjekter",
    projects_description: "Se arbeidet mitt",
    services: "Tjenester",
    services_description: "Hva jeg kan tilby",
    skills: "Ferdigheter",
    skills_description: "Min ekspertise",
    testimonials: "Vitnesbyrd",
    testimonials_description: "Hva andre sier om meg",
    location: "Sted",
    location_description: "Finn meg her",
    contact: "Kontakt",
    contact_description: "Kom i kontakt",
    schedule: "Timeplan & Status",
    schedule_description: "Mine arbeidstimer og tilgjengelighet",
    quote: "Dagens sitat",
    quote_description: "Daglig inspirasjon",
    status_working: "Jobber nå",
    status_available: "Tilgjengelig",
    status_resting: "Hviler",
  },
  ua: {
    about: "Про мене",
    about_description: "Дізнайтеся більше про мене",
    projects: "Проекти",
    projects_description: "Перегляньте мою роботу",
    services: "Послуги",
    services_description: "Що я можу запропонувати",
    skills: "Навички",
    skills_description: "Моя експертиза",
    testimonials: "Відгуки",
    testimonials_description: "Що про мене кажуть інші",
    location: "Місцезнаходження",
    location_description: "Знайдіть мене тут",
    contact: "Контакт",
    contact_description: "Зв'яжіться зі мною",
    schedule: "Розклад та Статус",
    schedule_description: "Мій робочий час та доступність",
    quote: "Цитата Дня",
    quote_description: "Щоденне натхнення",
    status_working: "Зараз працюю",
    status_available: "Доступний",
    status_resting: "Відпочиваю",
  },
};
