import { Language, useTranslations } from "@/hooks/useTranslations";

const Header = () => {
  const { t, currentLanguage, setCurrentLanguage } = useTranslations();

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return (
    <header className="w-full h-full bg-[#1A1F2C]/80 backdrop-blur-md border-b border-gray-800 shadow-lg flex items-center">
      <div className="w-full h-full px-2 sm:px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center max-w-full md:max-w-[70%] flex flex-col justify-center h-full">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text animate-fade-in truncate">
            Vitalii Berbeha
          </h1>
          <h2 className="text-xs sm:text-sm md:text-base mt-0.5 bg-gradient-to-r from-[#0EA5E9] to-[#F97316] text-transparent bg-clip-text animate-slide-up truncate">
            {t("title")}
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 max-w-2xl mx-auto mt-0.5 animate-slide-up line-clamp-1 md:line-clamp-2">
            {t("subtitle")}
          </p>
        </div>
        <div className="flex gap-1 sm:gap-2 md:ml-4">
          {["NO", "EN", "UA"].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang as Language)}
              className={`px-1.5 sm:px-2 md:px-3 py-0.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-300 ${
                currentLanguage === lang
                  ? "bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white"
                  : "bg-black/20 hover:bg-black/40 text-gray-300"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;