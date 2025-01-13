import { Language, useTranslations } from "@/hooks/useTranslations";

const Header = () => {
  const { t, currentLanguage, setCurrentLanguage } = useTranslations();

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return (
    <header className="w-full bg-[#1A1F2C]/80 backdrop-blur-md border-b border-gray-800 shadow-lg py-4">
      <div className="w-full h-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text animate-fade-in">
            Vitalii Berbeha
          </h1>
          <h2 className="text-xl md:text-2xl mt-2 bg-gradient-to-r from-[#0EA5E9] to-[#F97316] text-transparent bg-clip-text animate-slide-up">
            {t("title")}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-2 text-sm md:text-base animate-slide-up">
            {t("subtitle")}
          </p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          {["NO", "EN", "UA"].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang as Language)}
              className={`px-3 md:px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
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