import React, { useRef, useEffect, useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { mapLocations, createCustomIcon } from '../../utils/mapConfig';

export const MapSection = ({ setShowModal }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    const loadLeaflet = async () => {
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
        document.head.appendChild(link);
      }

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
      
      const map = L.map(mapRef.current, {
        center: [15, 90],
        zoom: 4,
        scrollWheelZoom: false,
        zoomControl: true,
        minZoom: 3,
        maxZoom: 10
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        className: 'map-tiles'
      }).addTo(map);

      mapLocations.forEach((location) => {
        const marker = L.marker(location.coords, {
          icon: createCustomIcon(location.color, location.isHQ)
        }).addTo(map);

        marker.bindPopup(`
          <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: white; padding: 16px; border-radius: 12px; border: 2px solid ${location.color}; min-width: 220px; box-shadow: 0 10px 40px rgba(0,0,0,0.5);">
            <div style="font-weight: bold; font-size: 18px; color: ${location.color}; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              ${location.name}
              ${location.isHQ ? '<span style="background: ' + location.color + '; padding: 2px 8px; border-radius: 8px; font-size: 11px;">HQ</span>' : ''}
            </div>
            <div style="font-size: 14px; color: #cbd5e1; margin-top: 8px; padding-top: 8px; border-top: 1px solid #334155;">
              <div style="font-weight: 600; color: #e2e8f0;">${location.label}</div>
              <div style="color: #94a3b8; font-size: 12px; margin-top: 2px;">${location.description}</div>
            </div>
          </div>
        `, { closeButton: true, className: 'custom-popup' });
      });

      const latlngs = mapLocations.map(loc => loc.coords);
      L.polyline([latlngs[0], latlngs[1]], { color: '#3b82f6', weight: 3, opacity: 0.7, dashArray: '10, 10' }).addTo(map);
      L.polyline([latlngs[0], latlngs[2]], { color: '#8b5cf6', weight: 3, opacity: 0.7, dashArray: '10, 10' }).addTo(map);
      L.polyline([latlngs[1], latlngs[2]], { color: '#ec4899', weight: 3, opacity: 0.7, dashArray: '10, 10' }).addTo(map);

      mapInstanceRef.current = map;
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

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            Ready to<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">transform</span> your business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12">
            Join leading organizations that trust Microvernitech
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Global Presence</h3>
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-4 border border-gray-800 overflow-hidden">
            <div 
              ref={mapRef} 
              className="w-full h-96 rounded-2xl relative z-0"
              style={{ background: '#e5e3df', minHeight: '400px' }}
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
  );
};