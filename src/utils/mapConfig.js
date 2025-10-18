export const mapLocations = [
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

export const createCustomIcon = (color, isHQ = false) => {
  const size = isHQ ? 50 : 40;
  return window.L.divIcon({
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