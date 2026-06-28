import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // Gradient title - most repeated pattern (13+ uses)
    // Usage: <span gradient-title>text</span>
    'gradient-title': 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400',

    // Card patterns grouped by color - used throughout the deck
    // Usage: <div card-green>...</div> or <div card-green p-4>...</div>
    'card-green': 'border border-green-400/20 bg-green-400/5 rounded-xl',
    'card-green-sm': 'border border-green-400/20 bg-green-400/5 rounded-lg',
    'card-green-lg': 'border border-green-400/30 bg-green-400/5 rounded-2xl',
    'card-blue': 'border border-blue-400/20 bg-blue-400/5 rounded-xl',
    'card-red': 'border border-red-400/20 bg-red-400/5 rounded-lg',
    'card-orange': 'border border-orange-400/20 bg-orange-400/5 rounded-xl',
    'card-teal': 'border border-teal-400/30 bg-teal-400/5 rounded-xl',
    'card-gray': 'border border-gray-700 rounded-xl',
    'card-dark': 'border border-gray-700 bg-gray-800/50 rounded-xl',

    // Accent border callouts (left-border colored)
    'tip-green': 'border-l-4 border-green-400 bg-green-400/10 rounded-r-xl',
    'tip-red': 'border-l-4 border-red-400 bg-red-400/5 rounded-r-xl',
    'tip-green-light': 'border-l-4 border-green-400 bg-green-400/5 rounded-r-xl',

    // Flex centering
    'flex-center': 'flex items-center justify-center',
  },
})
