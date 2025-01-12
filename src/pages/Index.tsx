import { useState, useEffect } from "react";
import { BookOpen, Briefcase, Wrench, BarChart2, MessageSquare, Mail, Twitter, Facebook, MessageCircle, Linkedin, Instagram, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTranslations, Language } from "@/hooks/useTranslations";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
  image: string;
  gradient: string;
}

const Index = () => {
  const [time, setTime] = useState(new Date());
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [expandingCard, setExpandingCard] = useState<string | null>(null);
  const { t, currentLanguage, setCurrentLanguage, isLoading } = useTranslations();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sections: Section[] = [
    {
      id: "about",
      title: t("about"),
      icon: <BookOpen className="w-8 h-8" />,
      content: t("about_content"),
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800",
      gradient: "linear-gradient(225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)"
    },
    {
      id: "projects",
      title: t("projects"),
      icon: <Briefcase className="w-8 h-8" />,
      content: "",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
      gradient: "linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)"
    },
    {
      id: "services",
      title: t("services"),
      icon: <Wrench className="w-8 h-8" />,
      content: t("services_content"),
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
      gradient: "linear-gradient(90deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%)"
    },
    {
      id: "skills",
      title: t("skills"),
      icon: <BarChart2 className="w-8 h-8" />,
      content: t("skills_content"),
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
      gradient: "linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%)"
    },
    {
      id: "testimonials",
      title: t("testimonials"),
      icon: <MessageSquare className="w-8 h-8" />,
      content: "",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
      gradient: "linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)"
    },
    {
      id: "contact",
      title: t("contact"),
      icon: <Mail className="w-8 h-8" />,
      content: t("contact_content"),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
      gradient: "linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%)"
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com" },
    { icon: <Facebook className="w-6 h-6" />, url: "https://facebook.com" },
    { icon: <MessageCircle className="w-6 h-6" />, url: "https://t.me" },
    { icon: <Instagram className="w-6 h-6" />, url: "https://instagram.com" },
    { icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com" },
  ];

  const handleCardClick = (sectionId: string) => {
    setExpandingCard(sectionId);
    // Wait for expansion animation to complete before showing dialog
    setTimeout(() => {
      setOpenSection(sectionId);
      setExpandingCard(null);
    }, 600);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full glass-effect z-50">
        <div className="w-full px-4 md:px-8 py-4 md:h-[20vh] flex flex-col md:flex-row items-center justify-between">
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
          <div className="flex gap-2 mt-4 md:mt-0 md:absolute md:top-4 md:right-8">
            {["NO", "EN", "UA"].map((lang) => (
              <button
                key={lang}
                onClick={() => setCurrentLanguage(lang as Language)}
                className={`px-3 md:px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentLanguage === lang
                    ? "bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white"
                    : "glass-effect hover:bg-black/40 text-gray-300"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-[32vh] md:mt-[20vh] mb-16 p-4 md:p-8">
        <div className="bento-grid">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`bento-card ${expandingCard === section.id ? 'expanding' : ''} ${expandingCard && expandingCard !== section.id ? 'shrinking' : ''}`}
              onClick={() => handleCardClick(section.id)}
              style={{
                background: section.gradient,
              }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-[2rem] transition-opacity group-hover:opacity-30" />
              <img 
                src={section.image} 
                alt={section.title} 
                className="bento-card-image"
              />
              <div className="bento-card-content">
                <div className="text-white">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold mt-4 text-white drop-shadow-lg">
                  {section.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full glass-effect py-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
          <p className="text-gray-300 text-sm md:text-base">{time.toLocaleTimeString()}</p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Section Dialog */}
      {openSection && (
        <Dialog open={!!openSection} onOpenChange={() => setOpenSection(null)}>
          <DialogContent 
            className="w-full max-w-4xl mx-auto glass-effect"
            style={{
              background: sections.find(s => s.id === openSection)?.gradient,
            }}
          >
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center text-white">
                <span className="text-xl md:text-2xl font-bold">
                  {sections.find((s) => s.id === openSection)?.title}
                </span>
                <button
                  onClick={() => setOpenSection(null)}
                  className="hover:text-gray-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4 text-white relative z-10 text-sm md:text-base">
              {sections.find((s) => s.id === openSection)?.content}
            </div>
            <div className="absolute inset-0 bg-black/20 rounded-[2rem] z-0" />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;