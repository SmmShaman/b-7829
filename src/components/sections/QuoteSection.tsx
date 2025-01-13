import React, { useState, useEffect } from 'react';
import { useTranslations } from "@/hooks/useTranslations";
import { Quote } from "lucide-react";

interface QuoteType {
  en: string;
  no: string;
  ua: string;
  author: string;
}

const quotes: QuoteType[] = [
  {
    en: "The only way to do great work is to love what you do.",
    no: "Den eneste måten å gjøre godt arbeid på er å elske det du gjør.",
    ua: "Єдиний спосіб робити відмінну роботу — любити те, що ви робите.",
    author: "Steve Jobs"
  },
  {
    en: "Innovation distinguishes between a leader and a follower.",
    no: "Innovasjon skiller mellom en leder og en følger.",
    ua: "Інновації відрізняють лідера від послідовника.",
    author: "Steve Jobs"
  },
  {
    en: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    no: "Suksess er ikke endelig, fiasko er ikke fatal: det er motet til å fortsette som teller.",
    ua: "Успіх не остаточний, невдача не фатальна: важливо мати мужність продовжувати.",
    author: "Winston Churchill"
  }
];

const QuoteSection = () => {
  const { t, currentLanguage } = useTranslations();
  const [quote, setQuote] = useState<QuoteType>(quotes[0]);

  useEffect(() => {
    // Change quote every day based on the date
    const today = new Date();
    const index = today.getDate() % quotes.length;
    setQuote(quotes[index]);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <Quote className="w-8 h-8 text-blue-500" />
      <blockquote className="text-lg italic text-center">
        {quote[currentLanguage.toLowerCase() as keyof Omit<QuoteType, 'author'>]}
      </blockquote>
      <cite className="text-sm text-gray-400">— {quote.author}</cite>
    </div>
  );
};

export default QuoteSection;