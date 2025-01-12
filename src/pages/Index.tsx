import { useState } from "react";
import { BookOpen, Briefcase, Wrench, BarChart2, MessageSquare, Mail, Twitter, Facebook, Linkedin, Instagram, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { translations } from "@/utils/translations";

type Language = "EN" | "UA" | "NO";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
}

const Index = () => {
  const [time, setTime] = useState(new Date());
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<Language>("EN");

  // Update time every second
  useState(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sections: Section[] = [
    {
      id: "about",
      title: translations[currentLanguage].about,
      icon: <BookOpen className="w-8 h-8" />,
      content: translations[currentLanguage].aboutContent,
    },
    {
      id: "projects",
      title: translations[currentLanguage].projects,
      icon: <Briefcase className="w-8 h-8" />,
      content: translations[currentLanguage].projectsContent,
    },
    {
      id: "services",
      title: translations[currentLanguage].services,
      icon: <Wrench className="w-8 h-8" />,
      content: translations[currentLanguage].servicesContent,
    },
    {
      id: "skills",
      title: translations[currentLanguage].skills,
      icon: <BarChart2 className="w-8 h-8" />,
      content: translations[currentLanguage].skillsContent,
    },
    {
      id: "testimonials",
      title: translations[currentLanguage].testimonials,
      icon: <MessageSquare className="w-8 h-8" />,
      content: translations[currentLanguage].testimonialsContent,
    },
    {
      id: "contact",
      title: translations[currentLanguage].contact,
      icon: <Mail className="w-8 h-8" />,
      content: translations[currentLanguage].contactContent,
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com/yourusername" },
    { icon: <Facebook className="w-6 h-6" />, url: "https://facebook.com/yourusername" },
    { icon: <Instagram className="w-6 h-6" />, url: "https://instagram.com/yourusername" },
    { icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com/in/yourusername" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#1a1a1a] p-4 z-50">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-2xl font-bold">Vitalii Berbeha</h1>
          <h2 className="text-xl">{translations[currentLanguage].title}</h2>
          <p className="text-gray-400 mt-2 max-w-2xl text-center">
            {translations[currentLanguage].subtitle}
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setCurrentLanguage("NO")}
            className={`px-3 py-1 rounded ${
              currentLanguage === "NO" ? "bg-blue-600" : "bg-gray-700"
            }`}
          >
            NO
          </button>
          <button
            onClick={() => setCurrentLanguage("EN")}
            className={`px-3 py-1 rounded ${
              currentLanguage === "EN" ? "bg-blue-600" : "bg-gray-700"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setCurrentLanguage("UA")}
            className={`px-3 py-1 rounded ${
              currentLanguage === "UA" ? "bg-blue-600" : "bg-gray-700"
            }`}
          >
            UA
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-40 mb-16 p-8">
        <div className="bento-grid">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bento-card group cursor-pointer"
              onClick={() => setOpenSection(section.id)}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                {section.icon}
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-[#1a1a1a] p-4">
        <div className="flex justify-center items-center space-x-6">
          <p>{time.toLocaleTimeString()}</p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
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
          <DialogContent className="fixed inset-y-[64px] max-w-full h-[calc(100vh-128px)] m-0 rounded-none">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center">
                <span>{sections.find((s) => s.id === openSection)?.title}</span>
                <button
                  onClick={() => setOpenSection(null)}
                  className="hover:text-gray-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              {sections.find((s) => s.id === openSection)?.content}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;