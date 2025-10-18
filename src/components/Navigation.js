import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Microvernitech
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 pt-20 md:hidden">
          <div className="flex flex-col items-center space-y-8 text-2xl">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;