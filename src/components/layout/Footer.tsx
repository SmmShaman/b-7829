import { Mail, Twitter, Facebook, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com" },
    { icon: <Facebook className="w-6 h-6" />, url: "https://facebook.com" },
    { icon: <MessageCircle className="w-6 h-6" />, url: "https://t.me" },
    { icon: <Instagram className="w-6 h-6" />, url: "https://instagram.com" },
    { icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com" },
  ];

  return (
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
  );
};

export default Footer;