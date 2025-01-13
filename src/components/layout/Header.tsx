import { Language, useTranslations } from "@/hooks/useTranslations";

const Header = () => {
  const { t, currentLanguage, setCurrentLanguage } = useTranslations();

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return (
    <header className="w-full h-full bg-[#1A1F2C]/80 backdrop-blur-md border-b border-gray-800 shadow-lg flex items-center">
      <div className="w-full h-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between py-1">
        <div className="flex-1 text-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text animate-fade-in">
            Vitalii Berbeha
          </h1>
          <h2 className="text-lg md:text-xl mt-1 bg-gradient-to-r from-[#0EA5E9] to-[#F97316] text-transparent bg-clip-text animate-slide-up">
            {t("title")}
          </h2>
          <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto mt-1 animate-slide-up line-clamp-2">
            {t("subtitle")}
          </p>
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
          {["NO", "EN", "UA"].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang as Language)}
              className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
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