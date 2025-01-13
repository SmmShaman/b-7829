import { Language, useTranslations } from "@/hooks/useTranslations";

const Header = () => {
  const { t, currentLanguage, setCurrentLanguage } = useTranslations();

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[40vh] bg-[#1A1F2C]/80 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 h-full flex items-center max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text mb-4">
              {t("name")}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-[#0EA5E9] to-[#F97316] text-transparent bg-clip-text mb-4">
              {t("title")}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl">
              {t("subtitle")}
            </p>
          </div>
          
          <div className="flex gap-3 md:gap-4">
            {["NO", "EN", "UA"].map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang as Language)}
                className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
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