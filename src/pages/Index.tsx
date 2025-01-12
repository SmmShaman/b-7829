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

  // Update time every second
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

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#1a1a1a] z-50">
        <div className="container mx-auto py-6">
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-3xl font-bold mb-2">Vitalii Berbeha</h1>
            <h2 className="text-xl mb-3">{translations[currentLanguage].title}</h2>
            <p className="text-gray-400 max-w-2xl text-center">
              {translations[currentLanguage].subtitle}
            </p>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-48 mb-16 p-8">
        <div className="bento-grid">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bento-card group cursor-pointer"
              onClick={() => setOpenSection(section.id)}
            >
              <img 
                src={section.image} 
                alt={section.title} 
                className="bento-card-image"
              />
              <div className="bento-card-content">
                {section.icon}
                <h2 className="text-xl font-semibold mt-4">{section.title}</h2>
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
          <DialogContent className="w-full max-w-4xl mx-auto">
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
            <div className="mt-4" dangerouslySetInnerHTML={{ 
              __html: sections.find((s) => s.id === openSection)?.content || '' 
            }} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;
