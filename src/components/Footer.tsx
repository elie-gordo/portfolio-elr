
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import MaltIcon from "@/components/icons/MaltIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-b from-[#121212] to-[#1a1a1a] border-t border-[#333333] py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Portfolio</h3>
          </div>

          <div className="flex space-x-6">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link>
            <Link to="/index" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
            <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full hover:bg-white/10 transition-all duration-300">
              <Github className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-white/10 transition-all duration-300">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="mailto:your@email.com"
               className="p-2 rounded-full hover:bg-white/10 transition-all duration-300">
              <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="https://malt.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-white/10 transition-all duration-300">
              <MaltIcon className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-[#333333] text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Votre Nom. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
