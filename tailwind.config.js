/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#6544f6',
        muted: '#6f737a',
      },
      fontFamily: {
        sans: ['Inter_400Regular'],
        inter: ['Inter_400Regular'],
        'inter-medium': ['Inter_500Medium'],
        'inter-semibold': ['Inter_600SemiBold'],
        'inter-bold': ['Inter_700Bold'],
      },
    },
  },
  corePlugins: {
    fontWeight: false,
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.font-normal': {
          fontFamily: 'Inter_400Regular',
        },
        '.font-medium': {
          fontFamily: 'Inter_500Medium',
        },
        '.font-semibold': {
          fontFamily: 'Inter_600SemiBold',
        },
        '.font-bold': {
          fontFamily: 'Inter_700Bold',
        },
      });
    },
  ],
};
