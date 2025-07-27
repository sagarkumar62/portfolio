"use client";
import { ChevronDown, Menu, X, Mail, Linkedin, Instagram, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-sm">SK</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg">SAGAR KUMAR</div>
              <div className="text-gray-400 text-xs">FRONTEND DEVELOPER</div>
            </div>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            {pathname === "/" && (
              <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </a>
            )}
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <a href="/SAGAR_RESUME.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Resume
            </a>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors flex items-center focus:outline-none">
                Contact <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-black/95 border border-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-50">
                <a href="https://wa.me/916202823710" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900 hover:text-green-400 transition-colors">
                  <MessageCircle className="w-5 h-5 mr-2 text-green-400" /> WhatsApp
                </a>
                <a href="mailto:pandeysagar7991@gmail.com" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900 hover:text-red-400 transition-colors">
                  <Mail className="w-5 h-5 mr-2 text-red-400" /> Gmail
                </a>
                <a href="https://www.linkedin.com/in/sagar-kumarcs/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5 mr-2 text-blue-400" /> LinkedIn
                </a>
                <a href="https://www.instagram.com/sagar_r72?igsh=MTJqOWE4MDc4cmQ2dA==" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900 hover:text-pink-400 transition-colors">
                  <Instagram className="w-5 h-5 mr-2 text-pink-400" /> Instagram
                </a>
                <a href="tel:+916202823710" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900 hover:text-emerald-400 transition-colors">
                  <Phone className="w-5 h-5 mr-2 text-emerald-400" /> Call
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900 hover:text-yellow-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg> Resume
                </a>
              </div>
            </div>
            <Link href="/connect">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full cursor-pointer">
                GET STARTED
              </Button>
            </Link>
          </div>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 bg-black/95 rounded-lg p-6 border border-gray-800 animate-fade-in-down">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            {pathname === "/" && (
              <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center" onClick={() => setMobileOpen(false)}>
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </a>
            )}
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
              Projects
            </Link>
            <a href="/SAGAR_RESUME.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Resume
            </a>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors flex items-center w-full focus:outline-none">
                Contact <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-black/95 border border-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-50">
                <a href="https://wa.me/916202823710" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900 hover:text-green-400 transition-colors">
                  <MessageCircle className="w-5 h-5 mr-2 text-green-400" /> WhatsApp
                </a>
                <a href="mailto:pandeysagar7991@gmail.com" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900 hover:text-red-400 transition-colors">
                  <Mail className="w-5 h-5 mr-2 text-red-400" /> Gmail
                </a>
                <a href="https://www.linkedin.com/in/sagar-kumarcs/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5 mr-2 text-blue-400" /> LinkedIn
                </a>
                <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900 hover:text-pink-400 transition-colors">
                  <Instagram className="w-5 h-5 mr-2 text-pink-400" /> Instagram
                </a>
                <a href="tel:+916202823710" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900 hover:text-emerald-400 transition-colors">
                  <Phone className="w-5 h-5 mr-2 text-emerald-400" /> Call
                </a>
                
              </div>
            </div>
            <Link href="/connect" className="w-full" onClick={() => setMobileOpen(false)}>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full w-full">
                GET STARTED
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
