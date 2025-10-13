import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Zap, TrendingUp, Boxes, Clock, Mail, MapPin } from 'lucide-react';

export default function MicrovernitechWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'Restaurant OMS',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Load CSS
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
        document.head.appendChild(link);
      }

      // Load JS
      if (!window.L) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
        script.onload = () => setMapLoaded(true);
        document.body.appendChild(script);
      } else {
        setMapLoaded(true);
      }
    };

    loadLeaflet();
  }, []);

  useEffect(() => {
    if (mapLoaded && mapRef.current && !mapInstanceRef.current) {
      const L = window.L;
      
      // Initialize map centered on South/Southeast Asia
      const map = L.map(mapRef.current, {
        center: [15, 90],
        zoom: 4,
        scrollWheelZoom: false,
        zoomControl: true,
        minZoom: 3,
        maxZoom: 10
      });

      // Add dark theme tiles with better visibility
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        className: 'map-tiles'
      }).addTo(map);

      // Custom icon styling with better visibility
      const createCustomIcon = (color, isHQ = false) => {
        const size = isHQ ? 50 : 40;
        return L.divIcon({
          className: 'custom-marker',
          html: `
            <div style="position: relative; width: ${size}px; height: ${size}px;">
              <div style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: ${color};
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 4px solid white;
                box-shadow: 0 4px 20px rgba(0,0,0,0.4), 0 0 30px ${color}80;
              "></div>
              <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -60%);
                color: white;
                font-size: ${isHQ ? '24px' : '20px'};
                z-index: 1;
              ">📍</div>
              ${isHQ ? `<div style="
                position: absolute;
                top: -8px;
                right: -8px;
                background: ${color};
                color: white;
                padding: 2px 6px;
                border-radius: 10px;
                font-size: 10px;
                font-weight: bold;
                border: 2px solid white;
                z-index: 2;
              ">HQ</div>` : ''}
            </div>
          `,
          iconSize: [size, size],
          iconAnchor: [size/2, size],
        });
      };

      const locations = [
        {
          name: 'Singapore',
          coords: [1.3521, 103.8198],
          color: '#3b82f6',
          label: 'Headquarters',
          description: 'Asia Pacific Hub',
          isHQ: true
        },
        {
          name: 'Gurgaon',
          coords: [28.4595, 77.0266],
          color: '#8b5cf6',
          label: 'North India',
          description: 'Development Center',
          isHQ: false
        },
        {
          name: 'Bengaluru',
          coords: [12.9716, 77.5946],
          color: '#ec4899',
          label: 'South India',
          description: 'Operations Hub',
          isHQ: false
        }
      ];

      // Add markers
      locations.forEach((location) => {
        const marker = L.marker(location.coords, {
          icon: createCustomIcon(location.color, location.isHQ)
        }).addTo(map);

        marker.bindPopup(`
          <div style="
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            color: white;
            padding: 16px;
            border-radius: 12px;
            border: 2px solid ${location.color};
            min-width: 220px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          ">
            <div style="font-weight: bold; font-size: 18px; color: ${location.color}; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              ${location.name}
              ${location.isHQ ? '<span style="background: ' + location.color + '; padding: 2px 8px; border-radius: 8px; font-size: 11px;">HQ</span>' : ''}
            </div>
            <div style="font-size: 12px; color: #94a3b8; margin-bottom: 6px; font-family: monospace;">
              📍 ${location.coords[0].toFixed(4)}°N, ${location.coords[1].toFixed(4)}°E
            </div>
            <div style="font-size: 14px; color: #cbd5e1; margin-top: 8px; padding-top: 8px; border-top: 1px solid #334155;">
              <div style="font-weight: 600; color: #e2e8f0;">${location.label}</div>
              <div style="color: #94a3b8; font-size: 12px; margin-top: 2px;">${location.description}</div>
            </div>
          </div>
        `, {
          closeButton: true,
          className: 'custom-popup'
        });
      });

      // Draw curved lines between locations with better visibility
      const latlngs = locations.map(loc => loc.coords);
      
      // Singapore to Gurgaon
      const line1 = L.polyline([latlngs[0], latlngs[1]], {
        color: '#3b82f6',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 10',
        className: 'connection-line'
      }).addTo(map);

      // Singapore to Bengaluru
      const line2 = L.polyline([latlngs[0], latlngs[2]], {
        color: '#8b5cf6',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 10',
        className: 'connection-line'
      }).addTo(map);

      // Gurgaon to Bengaluru
      const line3 = L.polyline([latlngs[1], latlngs[2]], {
        color: '#ec4899',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 10',
        className: 'connection-line'
      }).addTo(map);

      mapInstanceRef.current = map;
      
      // Fit bounds to show all locations
      const bounds = L.latLngBounds(latlngs);
      map.fitBounds(bounds, { padding: [50, 50] });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [mapLoaded]);

  const parallaxOffset = scrollY * 0.5;

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Prepare email content
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

    // Create mailto link (hidden from user)
    const mailtoLink = `mailto:ayush@microvernitech.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Trigger email in background
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.click();
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
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
      {/* Navigation */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 pt-20 md:hidden">
          <div className="flex flex-col items-center space-y-8 text-2xl">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Home</a>
            <a href="#products" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Products</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      )}

      {/* Demo Request Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Schedule a Demo
                  </h3>
                  <p className="text-gray-400">Fill in your details and we'll get back to you shortly</p>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Product Interest *
                    </label>
                    <select
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition"
                    >
                      <option value="Restaurant OMS">Restaurant OMS</option>
                      <option value="CMMS">CMMS</option>
                      <option value="Custom CRM & Business Integration">Custom CRM & Business Integration</option>
                      <option value="Multiple Products">Multiple Products</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
                      placeholder="Tell us more about your requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Request
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-green-400 mb-4">Request Submitted!</h4>
                  <p className="text-gray-400 mb-2">Thank you for your interest in Microvernitech.</p>
                  <p className="text-gray-400">Our team will contact you shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            We help<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              businesses
            </span><br />
            gear up for<br />
            tomorrow
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            Microvernitech unlocks operational excellence through purpose-built management systems. 
            We understand the challenges companies face in streamlining operations at speed and scale. 
            With the right technology, we help organizations overcome those challenges and become 
            adaptive intelligent enterprises.
          </p>
          <button 
            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
          >
            Explore Solutions
          </button>
        </div>

        {/* Infinite Scroll Animation */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-8 bg-gradient-to-t from-black to-transparent">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="mx-8 text-gray-600 text-xl font-light">
                INNOVATE • AUTOMATE • ELEVATE •
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Microvernitech Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            Why <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Microvernitech?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="w-12 h-12" />, title: "Purpose Built Systems", desc: "Tailored solutions designed with deep industry expertise" },
              { icon: <TrendingUp className="w-12 h-12" />, title: "Outcome Driven", desc: "Committed to creating value with measurable results" },
              { icon: <Boxes className="w-12 h-12" />, title: "Integrated Solutions", desc: "Seamless integration across your entire operation" },
              { icon: <Clock className="w-12 h-12" />, title: "Rapid Deployment", desc: "Fast implementation, scalable architecture, quick ROI" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                <div className="text-blue-400 mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
            Take the<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              next leap
            </span> in<br />
            operations
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-4xl mx-auto mb-20">
            Changing market dynamics, complex workflows, siloed systems, evolving customer expectations 
            and operational inefficiencies – add to the complexity of modern business operations.
          </p>

          {/* Restaurant OMS */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Restaurant OMS
              </h3>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed max-w-3xl mx-auto">
                Transform your restaurant operations with our comprehensive Order Management System. 
                Streamline orders, optimize kitchen workflows, and deliver exceptional dining experiences.
              </p>
            </div>

            {/* Product Screenshot */}
            <div className="mb-12 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-2 rounded-3xl border border-blue-500/30">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Side - Text Content */}
                    <div className="space-y-6 flex flex-col justify-center">
                      <h4 className="text-3xl md:text-4xl font-bold text-gray-900">Take the next step</h4>
                      <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-4 rounded-2xl text-white">
                        in seamless order-management
                      </h4>
                      <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
                        <p className="text-yellow-600 font-semibold">Our seamless ordering software revolutionizes restaurant operations, providing a smooth and intuitive ordering experience for customers.</p>
                        <p>With <span className="font-bold text-gray-900">real-time menu updates</span> and <span className="font-bold text-gray-900">direct integration</span> into your POS and kitchen display systems, it <span className="font-bold text-gray-900">reduces errors and wait times</span> while <span className="font-bold text-gray-900">improving efficiency</span>.</p>
                        <p className="text-yellow-600 font-semibold">Empower your staff and delight your customers with faster, accurate service.</p>
                      </div>
                    </div>

                    {/* Right Side - Order Interface Mockup */}
                    <div className="bg-gray-100 rounded-2xl p-6 shadow-inner">
                      <div className="bg-white rounded-xl p-6 h-full flex flex-col shadow-lg">
                        {/* Search and Cart Header */}
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                          <div className="flex items-center gap-2 text-gray-400 flex-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span className="text-sm">Search for Dishes...</span>
                          </div>
                          <div className="text-sm font-semibold text-gray-900">
                            Your Cart <span className="text-gray-500 font-normal">2 ITEM(S)</span>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div className="flex-1 space-y-6 overflow-y-auto">
                          {/* Snacks Section */}
                          <div>
                            <div className="text-xs font-bold text-gray-600 mb-3">Snacks <span className="font-normal">2 ITEM(S)</span></div>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg border border-blue-100">
                                <div className="w-14 h-14 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg flex items-center justify-center text-2xl">🍕</div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-bold text-gray-900">Spicy Peas Pizza 🌶️</div>
                                  <div className="text-xs text-gray-500 truncate">Pizza de guisantes picantes</div>
                                  <div className="text-sm font-bold text-red-600 mt-1">$7.00</div>
                                </div>
                                <button className="text-xs px-3 py-1 border border-green-500 rounded text-green-600 hover:bg-green-50 font-semibold whitespace-nowrap">+ADD</button>
                              </div>
                              <div className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg border border-purple-100">
                                <div className="w-14 h-14 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg flex items-center justify-center text-2xl">🌽</div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-bold text-gray-900">Butter Corn Cone 🌽</div>
                                  <div className="text-xs text-gray-500 truncate">Butter Corn Cone</div>
                                  <div className="text-sm font-bold text-red-600 mt-1">$12.00</div>
                                </div>
                                <button className="text-xs px-3 py-1 border border-green-500 rounded text-green-600 hover:bg-green-50 font-semibold whitespace-nowrap">+ADD</button>
                              </div>
                            </div>
                          </div>

                          {/* Sandwich Section */}
                          <div>
                            <div className="text-xs font-bold text-gray-600 mb-3">Sandwich <span className="font-normal">1 ITEM(S)</span></div>
                            <div className="flex items-center gap-3 bg-pink-50 p-3 rounded-lg border border-pink-100">
                              <div className="w-14 h-14 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg flex items-center justify-center text-2xl">🥪</div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-bold text-gray-900">Pasta Sandwich 🥪</div>
                                <div className="text-xs text-gray-500 truncate">Pasta Sandwich</div>
                                <div className="text-sm font-bold text-red-600 mt-1">$8.00</div>
                              </div>
                              <button className="text-xs px-3 py-1 border border-green-500 rounded text-green-600 hover:bg-green-50 font-semibold whitespace-nowrap">+ADD</button>
                            </div>
                          </div>
                        </div>

                        {/* Cart Summary */}
                        <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                          <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                              <button className="bg-green-500 text-white w-7 h-7 rounded flex items-center justify-center font-bold">−</button>
                              <span className="font-bold text-gray-900 min-w-[20px] text-center">1</span>
                              <button className="bg-green-500 text-white w-7 h-7 rounded flex items-center justify-center font-bold">+</button>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-gray-600">Spicy Peas Pizza - Full</div>
                              <div className="text-sm font-bold text-gray-900">$15.00</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                              <button className="bg-green-500 text-white w-7 h-7 rounded flex items-center justify-center font-bold">−</button>
                              <span className="font-bold text-gray-900 min-w-[20px] text-center">1</span>
                              <button className="bg-green-500 text-white w-7 h-7 rounded flex items-center justify-center font-bold">+</button>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-gray-600">Butter Corn Cone - Full</div>
                              <div className="text-sm font-bold text-gray-900">$20.00</div>
                            </div>
                          </div>
                          
                          {/* Totals */}
                          <div className="pt-3 border-t border-gray-200 space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Sub Total</span>
                              <span className="font-bold text-gray-900">$35.00</span>
                            </div>
                            <div className="flex justify-between text-base font-bold">
                              <span className="text-gray-900">Amount Payable</span>
                              <span className="text-gray-900">$35.00</span>
                            </div>
                            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold text-sm mt-3 transition">
                              PLACE ORDER NOW
                            </button>
                            <div className="text-xs text-gray-500 text-center">Note: Min. Order - $20.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Apple-style Horizontal Scroll */}
            <div className="relative">
              <div 
                ref={scrollRef1}
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[
                  { icon: '🍽️', title: 'Table Management', color: 'blue', features: ['Real-time status', 'Reservation system', 'Floor plan view', 'Wait time tracking'] },
                  { icon: '📊', title: 'Order Analytics', color: 'purple', features: ['Sales trends', 'Peak hours insights', 'Menu performance', 'Revenue tracking'] },
                  { icon: '💰', title: 'Payment Integration', color: 'pink', features: ['Multiple methods', 'Split bills', 'Tip management', 'Receipt automation'] },
                  { icon: '📱', title: 'Mobile POS', color: 'green', features: ['Tableside ordering', 'Kitchen sync', 'Offline mode', 'Cloud backup'] },
                  { icon: '🔔', title: 'Smart Notifications', color: 'orange', features: ['Order updates', 'Kitchen alerts', 'Customer feedback', 'Staff messaging'] },
                  { icon: '📦', title: 'Inventory Control', color: 'indigo', features: ['Stock tracking', 'Auto reorder', 'Waste management', 'Supplier sync'] }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex-shrink-0 w-80 snap-center"
                  >
                    <div className={`bg-gradient-to-br from-${item.color}-900/30 to-${item.color}-900/10 p-1 rounded-3xl border border-${item.color}-500/30 h-full hover:border-${item.color}-500 transition-all duration-300`}>
                      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 h-full">
                        <div className={`w-20 h-20 bg-gradient-to-br from-${item.color}-500 to-${item.color}-700 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg`}>
                          {item.icon}
                        </div>
                        <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                        <ul className="space-y-3">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-300">
                              <div className={`w-2 h-2 bg-${item.color}-400 rounded-full mr-3`}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center text-gray-500 text-sm mt-4">← Scroll to explore features →</div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  setFormData({ ...formData, interest: 'Restaurant OMS' });
                  setShowModal(true);
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Explore Restaurant OMS in Detail
              </button>
            </div>
          </div>

          {/* CMMS */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                CMMS
              </h3>
              <p className="text-xl text-gray-400 mb-2 leading-relaxed">
                Computerized Maintenance Management System
              </p>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed max-w-3xl mx-auto">
                Maximize equipment uptime and minimize maintenance costs with our intelligent CMMS. 
                Automate workflows, predict failures, and optimize your maintenance operations.
              </p>
            </div>

            {/* Reliability Based Maintenance Highlight */}
            <div className="mb-16 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-8 rounded-3xl border-2 border-purple-500/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-2xl">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-white mb-2">Reliability Based Maintenance (RBM)</h4>
                      <p className="text-purple-200 text-lg">Proactive maintenance strategy powered by data intelligence</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                      <div className="text-4xl mb-3">📊</div>
                      <h5 className="text-xl font-bold mb-2 text-purple-300">Risk Assessment</h5>
                      <p className="text-gray-300 text-sm">Identify critical assets and prioritize maintenance activities based on failure modes and consequences</p>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                      <div className="text-4xl mb-3">🔍</div>
                      <h5 className="text-xl font-bold mb-2 text-purple-300">Condition Monitoring</h5>
                      <p className="text-gray-300 text-sm">Real-time tracking of asset health through sensors and IoT integration for predictive insights</p>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                      <div className="text-4xl mb-3">⚙️</div>
                      <h5 className="text-xl font-bold mb-2 text-purple-300">Optimization</h5>
                      <p className="text-gray-300 text-sm">Optimize maintenance intervals and strategies to maximize reliability while minimizing costs</p>
                    </div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                    <h5 className="text-lg font-bold mb-4 text-purple-200">RBM Framework Integration</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-white">Failure Mode Analysis:</span>
                          <span className="text-gray-300"> Comprehensive FMEA and FMECA capabilities</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-white">Criticality Ranking:</span>
                          <span className="text-gray-300"> Automated asset criticality assessment</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-white">Preventive Strategies:</span>
                          <span className="text-gray-300"> PM, PdM, and CBM task scheduling</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-white">Performance Metrics:</span>
                          <span className="text-gray-300"> MTBF, MTTR, and reliability KPIs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Apple-style Horizontal Scroll */}
            <div className="relative">
              <div 
                ref={scrollRef2}
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[
                  { icon: '🔧', title: 'Work Order Management', color: 'purple', features: ['Automated scheduling', 'Priority queuing', 'Task assignment', 'Progress tracking'] },
                  { icon: '📊', title: 'Asset Tracking', color: 'blue', features: ['Complete history', 'QR code scanning', 'Lifecycle management', 'Depreciation calc'] },
                  { icon: '⚡', title: 'Predictive Analytics', color: 'yellow', features: ['Failure prediction', 'Pattern detection', 'Risk assessment', 'ML algorithms'] },
                  { icon: '📱', title: 'Mobile Access', color: 'green', features: ['Field technicians', 'Photo uploads', 'Offline mode', 'Real-time sync'] },
                  { icon: '📈', title: 'Performance Reports', color: 'pink', features: ['KPI dashboards', 'Downtime analysis', 'Cost tracking', 'Custom reports'] },
                  { icon: '🔔', title: 'Smart Alerts', color: 'orange', features: ['Preventive reminders', 'Critical alerts', 'Team notifications', 'Escalation rules'] }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex-shrink-0 w-80 snap-center"
                  >
                    <div className={`bg-gradient-to-br from-${item.color}-900/30 to-${item.color}-900/10 p-1 rounded-3xl border border-${item.color}-500/30 h-full hover:border-${item.color}-500 transition-all duration-300`}>
                      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 h-full">
                        <div className={`w-20 h-20 bg-gradient-to-br from-${item.color}-500 to-${item.color}-700 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg`}>
                          {item.icon}
                        </div>
                        <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                        <ul className="space-y-3">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-300">
                              <div className={`w-2 h-2 bg-${item.color}-400 rounded-full mr-3`}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center text-gray-500 text-sm mt-4">← Scroll to explore features →</div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  setFormData({ ...formData, interest: 'CMMS' });
                  setShowModal(true);
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Explore CMMS in Detail
              </button>
            </div>
          </div>

          {/* Custom CRM & Business Integration */}
          <div className="mt-32">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Custom CRM & Business Integration
              </h3>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed max-w-4xl mx-auto">
                Transform your entire organization with our custom-designed CRM and integrated cloud-based business applications. 
                Break down silos, connect every vertical, and unlock intelligent insights across your enterprise.
              </p>
            </div>

            {/* Integration Architecture Visualization */}
            <div className="mb-16 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-8 rounded-3xl border-2 border-cyan-500/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <h4 className="text-3xl font-bold text-white mb-4">Unified Business Intelligence Platform</h4>
                    <p className="text-cyan-200 text-lg max-w-3xl mx-auto">
                      Connect sales, marketing, operations, finance, and customer service into one intelligent ecosystem
                    </p>
                  </div>

                  {/* Central Hub Visualization */}
                  <div className="relative flex items-center justify-center mb-12">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Connection Lines */}
                      <svg className="absolute w-full h-full" style={{ maxWidth: '800px', maxHeight: '400px' }}>
                        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#crmGradient1)" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                        <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="url(#crmGradient2)" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                        <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="url(#crmGradient3)" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                        <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="url(#crmGradient4)" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                        <defs>
                          <linearGradient id="crmGradient1">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                          <linearGradient id="crmGradient2">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                          <linearGradient id="crmGradient3">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                          <linearGradient id="crmGradient4">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Central CRM Hub */}
                    <div className="relative z-10 bg-gradient-to-br from-cyan-500 to-blue-600 w-40 h-40 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🎯</div>
                        <div className="text-white font-bold text-sm">CRM Core</div>
                        <div className="text-cyan-100 text-xs">AI-Powered</div>
                      </div>
                    </div>

                    {/* Connected Modules */}
                    <div className="absolute top-0 left-0 bg-gradient-to-br from-blue-500 to-blue-700 w-32 h-32 rounded-2xl flex items-center justify-center shadow-xl border-2 border-blue-300 transform hover:scale-110 transition">
                      <div className="text-center">
                        <div className="text-3xl mb-1">💼</div>
                        <div className="text-white font-semibold text-xs">Sales</div>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 bg-gradient-to-br from-purple-500 to-purple-700 w-32 h-32 rounded-2xl flex items-center justify-center shadow-xl border-2 border-purple-300 transform hover:scale-110 transition">
                      <div className="text-center">
                        <div className="text-3xl mb-1">📢</div>
                        <div className="text-white font-semibold text-xs">Marketing</div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 bg-gradient-to-br from-green-500 to-green-700 w-32 h-32 rounded-2xl flex items-center justify-center shadow-xl border-2 border-green-300 transform hover:scale-110 transition">
                      <div className="text-center">
                        <div className="text-3xl mb-1">⚙️</div>
                        <div className="text-white font-semibold text-xs">Operations</div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 bg-gradient-to-br from-pink-500 to-pink-700 w-32 h-32 rounded-2xl flex items-center justify-center shadow-xl border-2 border-pink-300 transform hover:scale-110 transition">
                      <div className="text-center">
                        <div className="text-3xl mb-1">💰</div>
                        <div className="text-white font-semibold text-xs">Finance</div>
                      </div>
                    </div>
                  </div>

                  {/* Key Features Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition">
                      <div className="text-4xl mb-3">🔗</div>
                      <h5 className="text-xl font-bold mb-2 text-cyan-300">Cross-Vertical Integration</h5>
                      <p className="text-gray-300 text-sm">Seamlessly connect all business departments with real-time data synchronization</p>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-500 transition">
                      <div className="text-4xl mb-3">☁️</div>
                      <h5 className="text-xl font-bold mb-2 text-blue-300">Cloud-Native Architecture</h5>
                      <p className="text-gray-300 text-sm">Scalable, secure, and accessible from anywhere with enterprise-grade reliability</p>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition">
                      <div className="text-4xl mb-3">🤖</div>
                      <h5 className="text-xl font-bold mb-2 text-purple-300">AI-Driven Insights</h5>
                      <p className="text-gray-300 text-sm">Intelligent recommendations powered by machine learning across all verticals</p>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-pink-500/30 hover:border-pink-500 transition">
                      <div className="text-4xl mb-3">🎨</div>
                      <h5 className="text-xl font-bold mb-2 text-pink-300">Custom Design</h5>
                      <p className="text-gray-300 text-sm">Tailored to your unique workflows, processes, and business requirements</p>
                    </div>
                  </div>

                  {/* Capabilities List */}
                  <div className="mt-12 bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30">
                    <h5 className="text-2xl font-bold mb-6 text-cyan-200 text-center">Enterprise Capabilities</h5>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h6 className="font-bold text-white mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                          Customer 360° View
                        </h6>
                        <ul className="space-y-2 text-sm text-gray-300 ml-4">
                          <li>• Complete customer lifecycle tracking</li>
                          <li>• Unified communication history</li>
                          <li>• Behavioral analytics & insights</li>
                          <li>• Predictive customer scoring</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-bold text-white mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          Process Automation
                        </h6>
                        <ul className="space-y-2 text-sm text-gray-300 ml-4">
                          <li>• Workflow automation engine</li>
                          <li>• Smart task assignment</li>
                          <li>• Approval routing & triggers</li>
                          <li>• Document generation</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-bold text-white mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                          Analytics & Reporting
                        </h6>
                        <ul className="space-y-2 text-sm text-gray-300 ml-4">
                          <li>• Real-time dashboards</li>
                          <li>• Custom report builder</li>
                          <li>• Predictive forecasting</li>
                          <li>• KPI tracking & alerts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  setFormData({ ...formData, interest: 'Custom CRM & Business Integration' });
                  setShowModal(true);
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Explore Custom CRM Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Interested in<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                delving deeper?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Discover how Microvernitech can transform your operations
            </p>
          </div>

          {/* Global Presence Map */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Our Global Presence</h3>
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-4 border border-gray-800 overflow-hidden">
              {/* Leaflet Map Container */}
              <div 
                ref={mapRef} 
                className="w-full h-96 rounded-2xl relative z-0"
                style={{ 
                  background: '#e5e3df',
                  minHeight: '400px'
                }}
              >
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                      <div className="text-gray-400">Loading interactive map...</div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Map Legend */}
              <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
                  <span className="text-gray-300">Singapore (HQ)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"></div>
                  <span className="text-gray-300">Gurgaon</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50"></div>
                  <span className="text-gray-300">Bengaluru</span>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-4">
              Click on markers for detailed information • Scroll to zoom
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
              <Mail className="w-12 h-12 text-blue-400 mb-4" />
              <h4 className="text-2xl font-bold mb-2">Email Us</h4>
              <a href="mailto:customer.support@microvernitech.com" className="text-blue-400 hover:text-blue-300 text-lg">
                customer.support@microvernitech.com
              </a>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition">
              <MapPin className="w-12 h-12 text-purple-400 mb-4" />
              <h4 className="text-2xl font-bold mb-2">Headquarters</h4>
              <p className="text-gray-400 text-lg">
                Sengkang, Singapore
              </p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-5 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Microvernitech
          </div>
          <p className="text-gray-500 mb-8">Empowering businesses through intelligent systems</p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-gray-600 mt-8">© 2025 Microvernitech. All rights reserved.</p>
        </div>
      </footer>

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
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
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