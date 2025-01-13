import { Language, useTranslations } from "@/hooks/useTranslations";

const Header = () => {
  const { t, currentLanguage, setCurrentLanguage } = useTranslations();

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1F2C]/80 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center md:text-left w-full">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text mb-2">
              {t("name")}
            </h1>
            <h2 className="text-sm md:text-base lg:text-lg bg-gradient-to-r from-[#0EA5E9] to-[#F97316] text-transparent bg-clip-text mb-2">
              {t("title")}
            </h2>
            <p className="text-xs md:text-sm lg:text-base text-gray-300 max-w-2xl">
              {t("subtitle")}
            </p>
          </div>
          
          <div className="flex gap-2 md:gap-3">
            {["NO", "EN", "UA"].map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang as Language)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
      </div>
    </header>
  );
};

export default Header;