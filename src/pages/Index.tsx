import { useState, useEffect } from "react";
import { BookOpen, Briefcase, BarChart2, MessageSquare, Mail, Wrench } from "lucide-react";

// Language type and translations
type Language = "EN" | "NO" | "UA";

const translations = {
  EN: {
    about: "About Me",
    projects: "Projects",
    services: "Services",
    skills: "Skills",
    testimonials: "Testimonials",
    contact: "Contact",
    currentTime: "Current Time",
  },
  NO: {
    about: "Om Meg",
    projects: "Prosjekter",
    services: "Tjenester",
    skills: "Ferdigheter",
    testimonials: "Anbefalinger",
    contact: "Kontakt",
    currentTime: "Nåværende Tid",
  },
  UA: {
    about: "Про Мене",
    projects: "Проекти",
    services: "Послуги",
    skills: "Навички",
    testimonials: "Відгуки",
    contact: "Контакти",
    currentTime: "Поточний Час",
  },
};

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("EN");
  const [time, setTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold">Vitalii Berbeha</h1>
        <div className="flex gap-2">
          {(["EN", "NO", "UA"] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLanguage(lang)}
              className={`px-4 py-2 rounded-md transition-all ${
                currentLanguage === lang
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* About Me */}
          <div 
            className="bento-card group cursor-pointer"
            onClick={() => setActiveSection("about")}
          >
            <BookOpen className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold">{t.about}</h2>
          </div>

          {/* Projects */}
          <div 
            className="bento-card group cursor-pointer"
            onClick={() => setActiveSection("projects")}
          >
            <Briefcase className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold">{t.projects}</h2>
          </div>

          {/* Services */}
          <div 
            className="bento-card group cursor-pointer"
            onClick={() => setActiveSection("services")}
          >
            <Wrench className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold">{t.services}</h2>
          </div>

          {/* Skills */}
          <div 
            className="bento-card group cursor-pointer"
            onClick={() => setActiveSection("skills")}
          >
            <BarChart2 className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold">{t.skills}</h2>
          </div>

          {/* Testimonials */}
          <div 
            className="bento-card group cursor-pointer"
            onClick={() => setActiveSection("testimonials")}
          >
            <MessageSquare className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold">{t.testimonials}</h2>
          </div>

          {/* Contact */}
          <div 
            className="bento-card group cursor-pointer"
            onClick={() => setActiveSection("contact")}
          >
            <Mail className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold">{t.contact}</h2>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 border-t border-gray-800 text-center">
        <p className="text-gray-400">
          {time.toLocaleTimeString()} | stuardbmw@gmail.com
        </p>
      </footer>
    </div>
  );
};

export default Index;