import { defineConfig, presetMini, presetTypography } from "unocss"

export default defineConfig({    
    presets: [
        presetMini(), 
        presetTypography(),
    ],
    // Enable dark mode
  theme: {
    colors: {
      // Custom color palette
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      // Custom brand colors
      brand: '#6366f1',
      accent: '#f59e0b',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      serif: 'Georgia, serif',
      mono: 'JetBrains Mono, monospace',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    },
    spacing: {
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '9999px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
    // Custom breakpoints
    breakpoints: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
   // Set default typography
  preflights: [
    {
      getCSS: ({ theme }) => `
        * {
          font-family: ${theme.fontFamily?.sans || 'system-ui, sans-serif'};
        }
      `
    }
  ],
  // Add shortcuts for common patterns
  shortcuts: [
    // Button variants
    {
      'btn': 'px-4 py-2 rounded-md font-medium transition-colors duration-200',
      'btn-primary': 'btn bg-primary-600 text-white hover:bg-primary-700',
      'btn-secondary': 'btn bg-secondary-200 text-secondary-800 hover:bg-secondary-300',
      'btn-outline': 'btn border border-primary-600 text-primary-600 hover:bg-primary-50',
    },
    // Card components
    {
      'card': 'bg-white rounded-lg shadow-md border border-secondary-200',
      'card-body': 'p-6',
      'card-header': 'px-6 py-4 border-b border-secondary-200',
    },
    // Layout utilities
    {
      'container': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      'section': 'py-12 lg:py-16',
      'flex-center': 'flex items-center justify-center',
    },
  ],
  // Custom rules for more complex patterns
  rules: [
    // Gradient text
    [/^text-gradient-(.+)$/, ([, c]) => ({ 
      background: `linear-gradient(45deg, var(--uno-color-${c}-400), var(--uno-color-${c}-600))`,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    })],
    // Glass morphism effect
    ['glass', {
      background: 'rgba(255, 255, 255, 0.1)',
      'backdrop-filter': 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    }],
  ],
});