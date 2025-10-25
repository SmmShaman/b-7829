import { Twitter, Facebook, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: <Twitter className="w-4 h-4 md:w-5 md:h-5" />, url: "https://twitter.com" },
    { icon: <Facebook className="w-4 h-4 md:w-5 md:h-5" />, url: "https://facebook.com" },
    { icon: <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />, url: "https://t.me" },
    { icon: <Instagram className="w-4 h-4 md:w-5 md:h-5" />, url: "https://instagram.com" },
    { icon: <Linkedin className="w-4 h-4 md:w-5 md:h-5" />, url: "https://linkedin.com" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[11.1vh] px-6 md:px-10 lg:px-12 mb-4">
      <div className="h-full w-full max-w-6xl mx-auto">
        <div className="glass-card neon-border relative h-full w-full overflow-hidden rounded-2xl animate-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

          <div className="relative h-full w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex items-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 w-full">
              <p className="text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                {time.toLocaleTimeString()}
              </p>

              <div className="flex items-center gap-4 md:gap-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
