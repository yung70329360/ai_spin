/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist: [
    // 動態加載的 classes
    'hidden',
    'block',
    'bg-slate-700',
    'border-l-4',
    'border-cyan-400',
    'border-transparent',
    'pl-6',
    'pl-4',
    'active',
    'hover:bg-slate-200',
    'is-visible',
    'opacity-0',
    'transform',
    '-translate-x-4',
    'translate-x-0',
    'opacity-100',
    'transition',
    'ease-out',
    'duration-300',
    'duration-700',
    'ease-in-out'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Noto Sans TC', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        pulseGlow: {
          '0%, 100%': {
            textShadow: '0 0 8px rgba(56, 189, 248, 0.5)'
          },
          '50%': {
            textShadow: '0 0 20px rgba(56, 189, 248, 0.9)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        rotateSlow: {
          '0%': {
            transform: 'rotateY(0deg)'
          },
          '100%': {
            transform: 'rotateY(360deg)'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
} 