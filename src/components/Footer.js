import React from 'react';

function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
          Microvernitech
        </div>
        <p className="text-gray-500 mb-8">Empowering businesses through intelligent systems</p>
        <div className="flex justify-center space-x-8 text-gray-400 mb-8">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <p className="text-gray-600">© 2025 Microvernitech. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;