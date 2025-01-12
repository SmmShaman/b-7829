import { useState } from "react";
import { BookOpen, Briefcase, Wrench, BarChart2, MessageSquare, Mail, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const Index = () => {
  const [time, setTime] = useState(new Date());
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<"EN" | "UA" | "NO">("EN");

  const sections: Section[] = [
    {
      id: "about",
      title: "About Me",
      icon: <BookOpen className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            A passionate developer with expertise in web development and user experience design.
          </p>
        </div>
      ),
    },
    {
      id: "projects",
      title: "Projects",
      icon: <Briefcase className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Elvarika</h3>
          <p className="text-lg">
            An innovative project focused on delivering unique solutions.
          </p>
        </div>
      ),
    },
    {
      id: "services",
      title: "Services",
      icon: <Wrench className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Technical Consulting</li>
          </ul>
        </div>
      ),
    },
    {
      id: "skills",
      title: "Skills",
      icon: <BarChart2 className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <ul className="space-y-2">
            <li>React & TypeScript</li>
            <li>UI/UX Design</li>
            <li>Project Management</li>
          </ul>
        </div>
      ),
    },
    {
      id: "testimonials",
      title: "Testimonials",
      icon: <MessageSquare className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <blockquote className="border-l-2 pl-4 italic">
            "Exceptional work and dedication to the project."
          </blockquote>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      icon: <Mail className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <p>Email: your.email@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#1a1a1a] p-4 z-50">
        <div className="flex justify-end space-x-4">
          {["EN", "UA", "NO"].map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLanguage(lang as "EN" | "UA" | "NO")}
              className={`px-3 py-1 rounded ${
                currentLanguage === lang ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-16 mb-16 p-8">
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
      <footer className="fixed bottom-0 w-full bg-[#1a1a1a] p-4 text-center">
        <p>{time.toLocaleTimeString()}</p>
      </footer>

      {/* Section Dialog */}
      <Dialog open={!!openSection} onOpenChange={() => setOpenSection(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              {sections.find((s) => s.id === openSection)?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {sections.find((s) => s.id === openSection)?.content}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;