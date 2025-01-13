import { Language, useTranslations } from "@/hooks/useTranslations";

const Header = () => {
  const { t, currentLanguage, setCurrentLanguage } = useTranslations();

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return (
    <header className="w-full h-full bg-[#1A1F2C]/80 backdrop-blur-md border-b border-gray-800 shadow-lg flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left max-w-full md:max-w-[70%] flex flex-col justify-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text animate-fade-in">
            Vitalii Berbeha
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg mt-1 bg-gradient-to-r from-[#0EA5E9] to-[#F97316] text-transparent bg-clip-text animate-slide-up">
            {t("title")}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-1 animate-slide-up line-clamp-2">
            {t("subtitle")}
          </p>
        </div>
        <div className="flex gap-2 md:gap-3 mt-3 md:mt-0">
          {["NO", "EN", "UA"].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang as Language)}
              className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
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