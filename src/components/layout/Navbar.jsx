import React from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Microvernitech
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#products" className="hover:text-blue-400 transition">Products</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};
