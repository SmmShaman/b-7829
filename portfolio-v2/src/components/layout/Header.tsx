import { Language, useTranslations } from "@/hooks/useTranslations";
import { Globe } from "lucide-react";

const Header = () => {
  const { t, currentLanguage, setCurrentLanguage } = useTranslations();

  const languageLabels: Record<Language, string> = {
    NO: "Norsk",
    EN: "English",
    UA: "Українська"
  };

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[22.2vh] px-6 md:px-10 lg:px-12 mt-4">
      <div className="h-full w-full max-w-6xl mx-auto">
        <div
          className="glass-card neon-border relative h-full w-full overflow-hidden rounded-2xl animate-glow"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

          <div className="relative h-full flex items-center justify-between px-8 py-6 md:px-12 md:py-8">
            <div className="flex-1 text-center md:text-left space-y-3 md:space-y-4">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {t('title')}
              </h1>
              <h2 className="text-sm md:text-base lg:text-lg text-gray-200">
                {t('subtitle')}
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-gray-300 max-w-2xl">
                {t('description')}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {(["NO", "EN", "UA"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    currentLanguage === lang
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/50"
                      : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  {languageLabels[lang]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
