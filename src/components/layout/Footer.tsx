import { Mail, Twitter, Facebook, MessageCircle, Linkedin, Instagram } from "lucide-react";
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
    <footer className="w-full h-full bg-[#1A1F2C]/80 backdrop-blur-md border-t border-gray-800 shadow-lg flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6">
          <p className="text-sm md:text-base text-gray-300">{time.toLocaleTimeString()}</p>
          <div className="flex items-center gap-6">
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
      </div>
    </footer>
  );
};

export default Footer;