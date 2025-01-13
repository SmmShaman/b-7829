import { Mail, Twitter, Facebook, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5 md:w-6 md:h-6" />, url: "https://twitter.com" },
    { icon: <Facebook className="w-5 h-5 md:w-6 md:h-6" />, url: "https://facebook.com" },
    { icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />, url: "https://t.me" },
    { icon: <Instagram className="w-5 h-5 md:w-6 md:h-6" />, url: "https://instagram.com" },
    { icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />, url: "https://linkedin.com" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[20vh] bg-[#1A1F2C]/80 backdrop-blur-md border-t border-gray-800 shadow-lg">
      <div className="w-full h-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12 flex items-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
          <p className="text-lg md:text-xl text-gray-300">{time.toLocaleTimeString()}</p>
          <div className="flex items-center gap-6 md:gap-8">
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