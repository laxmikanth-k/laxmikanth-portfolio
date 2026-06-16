import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'fluid-base': ['clamp(0.95rem, 1.2vw, 1rem)', { lineHeight: '1.8' }],
        'fluid-lg': ['clamp(1.1rem, 1.9vw, 1.25rem)', { lineHeight: '1.8' }],
      },
      colors: {
        primary: '#2563EB',
        secondary: '#7C3AED',
        accent: '#06B6D4',
        surface: '#111827',
        backdrop: '#0F172A',
        canvas: '#0B1221',
        panel: '#111827',
        ivory: '#F8FAFC',
        slate: {
          950: '#020617',
          900: '#0B1221',
          800: '#1E293B',
          700: '#334155',
        },
      },
      boxShadow: {
        soft: '0 24px 60px rgba(15, 23, 42, 0.18)',
        glow: '0 0 0 1px rgba(59, 130, 246, 0.12), 0 24px 70px rgba(3, 105, 161, 0.18)',
        glass: '0 20px 60px rgba(15, 23, 42, 0.22)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(37, 99, 235, 0.14), transparent 42%)',
        'soft-gradient': 'linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(124, 58, 237, 0.12), rgba(6, 182, 212, 0.12))',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [forms],
};
