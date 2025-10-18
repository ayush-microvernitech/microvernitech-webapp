import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { MobileMenu } from '../components/layout/MobileMenu';
import { Footer } from '../components/layout/Footer';
import { DemoRequestModal } from '../components/modals/DemoRequestModal';
import { WhitePaperModal } from '../components/modals/WhitePaperModal';
import { HeroSection } from '../components/sections/HeroSection';
import { WhyMicrovernitech } from '../components/sections/WhyMicrovernitech';
import { ProductsSection } from '../components/sections/ProductSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ContactSection } from '../components/sections/ContactSection';
import { MapSection } from '../components/sections/MapSection';
import { useScrollPosition } from '../hooks/useScrollPosition';

export default function Home() {
  const scrollY = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showWhitePaperModal, setShowWhitePaperModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'Restaurant OMS',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const parallaxOffset = scrollY * 0.5;

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const emailSubject = `Demo Request from ${formData.name} - ${formData.company}`;
    const emailBody = `
New Demo Request Received:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Interest: ${formData.interest}

Message:
${formData.message}

---
This request was submitted via Microvernitech website.
    `.trim();

    const mailtoLink = `mailto:ayush@microvernitech.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.click();
    
    setFormSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: 'Restaurant OMS',
        message: ''
      });
      setFormSubmitted(false);
      setShowModal(false);
    }, 3000);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <DemoRequestModal 
        showModal={showModal}
        setShowModal={setShowModal}
        formData={formData}
        setFormData={setFormData}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        formSubmitted={formSubmitted}
      />

      <WhitePaperModal 
        showModal={showWhitePaperModal}
        setShowModal={setShowWhitePaperModal}
      />

      <HeroSection parallaxOffset={parallaxOffset} />
      <WhyMicrovernitech />
      <ProductsSection 
        setFormData={setFormData} 
        setShowModal={setShowModal} 
        formData={formData} 
      />
      <AboutSection setShowWhitePaperModal={setShowWhitePaperModal} />
      <ContactSection setShowModal={setShowModal} />
      <MapSection setShowModal={setShowModal} />
      <Footer />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .leaflet-container {
          background: #e5e3df !important;
          font-family: inherit !important;
          border-radius: 1rem;
          overflow: hidden;
        }
        .leaflet-tile-container {
          filter: brightness(0.7) contrast(1.2) saturate(0.8);
        }
        .leaflet-popup-content-wrapper {
          background: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .leaflet-popup-tip {
          background: #1e293b !important;
        }
        .custom-marker {
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
        }
        .connection-line {
          filter: drop-shadow(0 2px 8px rgba(59, 130, 246, 0.4));
        }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
        }
        .leaflet-control-zoom a {
          background: #1e293b !important;
          color: white !important;
          border: none !important;
        }
        .leaflet-control-zoom a:hover {
          background: #334155 !important;
        }
      `}</style>
    </div>
  );
}