import { Mail, Twitter, Facebook, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: <Twitter className="w-4 h-4" />, url: "https://twitter.com" },
    { icon: <Facebook className="w-4 h-4" />, url: "https://facebook.com" },
    { icon: <MessageCircle className="w-4 h-4" />, url: "https://t.me" },
    { icon: <Instagram className="w-4 h-4" />, url: "https://instagram.com" },
    { icon: <Linkedin className="w-4 h-4" />, url: "https://linkedin.com" },
  ];

  return (
    <footer className="w-full h-full bg-[#1A1F2C]/80 backdrop-blur-md border-t border-gray-800 shadow-lg flex items-center">
      <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-1 md:space-y-0 md:space-x-6">
        <p className="text-gray-300 text-xs md:text-sm">{time.toLocaleTimeString()}</p>
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
  );
};

export default Footer;