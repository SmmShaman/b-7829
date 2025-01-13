import { useState, useEffect } from "react";
import { BookOpen, Mail, MessageSquare, Clock, Wrench, Activity, X, Linkedin, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Language = "EN" | "UA" | "RU";

interface Section {
  id: string;
  title: Record<Language, string>;
  icon: React.ReactNode;
  content: Record<Language, React.ReactNode>;
}

const translations = {
  header: {
    EN: "Vitalii Berbeha",
    UA: "Віталій Бербеха",
    RU: "Виталий Бербеха"
  },
  contactForm: {
    name: {
      EN: "Name",
      UA: "Ім'я",
      RU: "Имя"
    },
    email: {
      EN: "Email",
      UA: "Email",
      RU: "Email"
    },
    message: {
      EN: "Message",
      UA: "Повідомлення",
      RU: "Сообщение"
    },
    send: {
      EN: "Send",
      UA: "Надіслати",
      RU: "Отправить"
    }
  }
};

const socialLinks = [
  { icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com/in/smmshaman" },
  { icon: <MessageSquare className="w-6 h-6" />, url: "https://t.me/Your_Nickname" },
  { icon: <Facebook className="w-6 h-6" />, url: "https://facebook.com/Your_Profile" },
  { icon: <Instagram className="w-6 h-6" />, url: "https://instagram.com/Your_Profile" },
  { icon: <Youtube className="w-6 h-6" />, url: "https://youtube.com/Your_Channel" },
];

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("EN");
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sections: Section[] = [
    {
      id: "about",
      title: {
        EN: "About Me",
        UA: "Про мене",
        RU: "Обо мне"
      },
      icon: <BookOpen className="w-8 h-8" />,
      content: {
        EN: <div className="space-y-4">
          <p>Hello! My name is Vitalii Berbeha. I am a specialist with extensive experience in e-commerce, project management, and marketing.</p>
          <ul className="list-disc list-inside">
            <li>Project management</li>
            <li>Sales analytics</li>
            <li>Social media marketing</li>
            <li>Product development and promotion on platforms like Amazon and Etsy</li>
          </ul>
        </div>,
        UA: <div className="space-y-4">
          <p>Привіт! Мене звати Віталій Бербеха. Я фахівець із багаторічним досвідом у сфері електронної комерції, управління проєктами та маркетингу.</p>
          <ul className="list-disc list-inside">
            <li>Управління проєктами</li>
            <li>Аналітика продажів</li>
            <li>Маркетинг у соціальних мережах</li>
            <li>Розробка та просування продуктів на платформах Amazon та Etsy</li>
          </ul>
        </div>,
        RU: <div className="space-y-4">
          <p>Привет! Меня зовут Виталий Бербеха. Я специалист с многолетним опытом в области электронной коммерции, управления проектами и маркетинга.</p>
          <ul className="list-disc list-inside">
            <li>Управление проектами</li>
            <li>Аналитика продаж</li>
            <li>Маркетинг в социальных сетях</li>
            <li>Разработка и продвижение продуктов на платформах Amazon и Etsy</li>
          </ul>
        </div>
      }
    },
    // ... Additional sections will be added here
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#1a1a1a] p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{translations.header[currentLanguage]}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              {["EN", "UA", "RU"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLanguage(lang as Language)}
                  className={`px-3 py-1 rounded transition-colors ${
                    currentLanguage === lang 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600" 
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-16 mb-16 p-8">
        <div className="bento-grid">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bento-card group cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => setOpenSection(section.id)}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                {section.icon}
                <h2 className="text-xl font-semibold">{section.title[currentLanguage]}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-[#1a1a1a] p-4 text-center">
        <p>{currentTime.toLocaleTimeString()}</p>
        <p className="text-sm text-gray-400">
          {currentLanguage === "EN" && "Made with ♥️ and attention to detail"}
          {currentLanguage === "UA" && "Зроблено з ♥️ та увагою до деталей"}
          {currentLanguage === "RU" && "Сделано с ♥️ и вниманием к деталям"}
        </p>
      </footer>

      {/* Section Dialog */}
      <Dialog open={!!openSection} onOpenChange={() => setOpenSection(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              {sections.find((s) => s.id === openSection)?.title[currentLanguage]}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {sections.find((s) => s.id === openSection)?.content[currentLanguage]}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;