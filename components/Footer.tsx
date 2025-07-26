import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 px-6 border-t border-gray-800 z-10 bg-black">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-sm">SK</span>
          </div>
          <div>
            <div className="text-white font-bold">SAGAR KUMAR</div>
            <div className="text-gray-400 text-sm">Frontend Developer & Three.js Specialist</div>
          </div>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Sagar Kumar. Crafted with passion and cutting-edge technology.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
