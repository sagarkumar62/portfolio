"use client";
import { ChevronDown, Menu, X } from "lucide-react";
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
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
              Contact <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full">
              GET STARTED
            </Button>
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
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center" onClick={() => setMobileOpen(false)}>
              Contact <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full w-full" onClick={() => setMobileOpen(false)}>
              GET STARTED
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
