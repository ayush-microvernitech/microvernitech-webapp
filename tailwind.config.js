module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
  safelist: [
    // Safelist dynamic color classes used in components
    'from-blue-900/30', 'to-blue-900/10', 'border-blue-500/30', 'border-blue-500',
    'from-purple-900/30', 'to-purple-900/10', 'border-purple-500/30', 'border-purple-500',
    'from-pink-900/30', 'to-pink-900/10', 'border-pink-500/30', 'border-pink-500',
    'from-green-900/30', 'to-green-900/10', 'border-green-500/30', 'border-green-500',
    'from-orange-900/30', 'to-orange-900/10', 'border-orange-500/30', 'border-orange-500',
    'from-indigo-900/30', 'to-indigo-900/10', 'border-indigo-500/30', 'border-indigo-500',
    'from-yellow-900/30', 'to-yellow-900/10', 'border-yellow-500/30', 'border-yellow-500',
    'bg-blue-400', 'bg-purple-400', 'bg-pink-400', 'bg-green-400', 'bg-orange-400', 'bg-yellow-400',
    'from-blue-500', 'to-blue-700', 'from-purple-500', 'to-purple-700',
    'from-pink-500', 'to-pink-700', 'from-green-500', 'to-green-700',
    'from-orange-500', 'to-orange-700', 'from-indigo-500', 'to-indigo-700',
    'from-yellow-500', 'to-yellow-700'
  ]
}