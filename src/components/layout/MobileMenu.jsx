import React from 'react';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  if (!menuOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/95 pt-20 md:hidden">
      <div className="flex flex-col items-center space-y-8 text-2xl">
        <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Home</a>
        <a href="#products" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Products</a>
        <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Contact</a>
      </div>
    </div>
  );
};