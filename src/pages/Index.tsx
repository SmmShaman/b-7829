import { useState, useEffect } from "react";
import { BookOpen, Briefcase, Wrench, BarChart2, MessageSquare, Mail, Twitter, Facebook, MessageCircle, Linkedin, Instagram, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { translations } from "@/utils/translations";

type Language = "EN" | "UA" | "NO";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
  image: string;
}

const Index = () => {
  const [time, setTime] = useState(new Date());
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<Language>("EN");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sections: Section[] = [
    {
      id: "about",
      title: translations[currentLanguage].about,
      icon: <BookOpen className="w-8 h-8" />,
      content: translations[currentLanguage].aboutContent,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800"
    },
    {
      id: "projects",
      title: translations[currentLanguage].projects,
      icon: <Briefcase className="w-8 h-8" />,
      content: translations[currentLanguage].projectsContent,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800"
    },
    {
      id: "services",
      title: translations[currentLanguage].services,
      icon: <Wrench className="w-8 h-8" />,
      content: translations[currentLanguage].servicesContent,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800"
    },
    {
      id: "skills",
      title: translations[currentLanguage].skills,
      icon: <BarChart2 className="w-8 h-8" />,
      content: translations[currentLanguage].skillsContent,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800"
    },
    {
      id: "testimonials",
      title: translations[currentLanguage].testimonials,
      icon: <MessageSquare className="w-8 h-8" />,
      content: translations[currentLanguage].testimonialsContent,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800"
    },
    {
      id: "contact",
      title: translations[currentLanguage].contact,
      icon: <Mail className="w-8 h-8" />,
      content: `
        <form action="mailto:info@vitalii.no" method="post" enctype="text/plain">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Name</label>
              <input type="text" name="name" class="w-full p-2 rounded bg-gray-800 border border-gray-700" required />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" class="w-full p-2 rounded bg-gray-800 border border-gray-700" required />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Message</label>
              <textarea name="message" rows="4" class="w-full p-2 rounded bg-gray-800 border border-gray-700" required></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </div>
        </form>
      `,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com" },
    { icon: <Facebook className="w-6 h-6" />, url: "https://facebook.com" },
    { icon: <MessageCircle className="w-6 h-6" />, url: "https://t.me" },
    { icon: <Instagram className="w-6 h-6" />, url: "https://instagram.com" },
    { icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com" },
  ];

  const gradients = [
    "linear-gradient(225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
    "linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)",
    "linear-gradient(90deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%)",
    "linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%)",
    "linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)",
    "linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%)"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full backdrop-blur-lg bg-black/30 z-50">
        <div className="w-full px-8 h-[20vh] flex items-center justify-between">
          <div className="flex-1 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text">
              Vitalii Berbeha
            </h1>
            <h2 className="text-2xl mt-2 bg-gradient-to-r from-[#0EA5E9] to-[#F97316] text-transparent bg-clip-text">
              {translations[currentLanguage].title}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mt-2 text-sm">
              {translations[currentLanguage].subtitle}
            </p>
          </div>
          <div className="flex gap-2 absolute top-4 right-8">
            {["NO", "EN", "UA"].map((lang) => (
              <button
                key={lang}
                onClick={() => setCurrentLanguage(lang as Language)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
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

      {/* Main Content */}
      <main className="flex-grow mt-[20vh] mb-16 p-8">
        <div className="bento-grid">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="bento-card group cursor-pointer"
              onClick={() => setOpenSection(section.id)}
              style={{
                background: gradients[index % gradients.length],
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-2xl transition-opacity group-hover:opacity-30" />
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
      <footer className="fixed bottom-0 w-full backdrop-blur-lg bg-black/30 p-4">
        <div className="flex justify-center items-center space-x-6">
          <p className="text-gray-300">{time.toLocaleTimeString()}</p>
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
          <DialogContent className="w-full max-w-4xl mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center text-white">
                <span>{sections.find((s) => s.id === openSection)?.title}</span>
                <button
                  onClick={() => setOpenSection(null)}
                  className="hover:text-gray-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4 text-gray-200" dangerouslySetInnerHTML={{ 
              __html: sections.find((s) => s.id === openSection)?.content || '' 
            }} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;
