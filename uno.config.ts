import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // Gradient title - most repeated pattern (13+ uses)
    // Usage: <span gradient-title>text</span>
    'gradient-title': 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400',

    // Card patterns grouped by color - used throughout the deck
    // Usage: <div card-green p-4>...</div>
    'card-green': 'border border-green-400/20 bg-green-400/5 rounded-xl',
    'card-green-sm': 'border border-green-400/20 bg-green-400/5 rounded-lg',
    'card-green-lg': 'border border-green-400/30 bg-green-400/5 rounded-2xl',
    'card-green-strong': 'border border-green-400/30 bg-green-400/5 rounded-xl',
    'card-blue': 'border border-blue-400/20 bg-blue-400/5 rounded-xl',
    'card-blue-sm': 'border border-blue-400/20 bg-blue-400/5 rounded-lg',
    'card-red': 'border border-red-400/20 bg-red-400/5 rounded-lg',
    'card-orange': 'border border-orange-400/20 bg-orange-400/5 rounded-xl',
    'card-orange-sm': 'border border-orange-400/20 bg-orange-400/5 rounded-lg',
    'card-purple': 'border border-purple-400/20 bg-purple-400/5 rounded-xl',
    'card-teal': 'border border-teal-400/30 bg-teal-400/5 rounded-xl',
    'card-teal-sm': 'border border-teal-400/20 bg-teal-400/5 rounded-xl',
    'card-gray': 'border border-gray-700 rounded-xl',
    'card-dark': 'border border-gray-700 bg-gray-800/50 rounded-xl',

    // Inline callout boxes — centered emphasis at slide bottom
    // Usage: <div callout>...</div>
    'callout': 'border border-teal-400/30 bg-teal-400/5 rounded-xl p-3',

    // Section page subtitle
    // Usage: <div section-desc>subtitle</div>
    'section-desc': 'text-xl opacity-60 mt-4',

    // Gradient divider line for visual breaks
    // Usage: <div divider />
    'divider': 'h-px w-full bg-gradient-to-r from-transparent via-green-400/30 to-transparent my-4',

    // Accent border callouts (left-border colored)
    // Usage: <div tip-green p-4>...</div>
    'tip-green': 'border-l-4 border-green-400 bg-green-400/10 rounded-r-xl',
    'tip-red': 'border-l-4 border-red-400 bg-red-400/5 rounded-r-xl',
    'tip-green-light': 'border-l-4 border-green-400 bg-green-400/5 rounded-r-xl',

    // Text semantics — used pervasively across the deck
    // Usage: <div desc-text>description</div> or <span desc-text>...</span>
    'desc-text': 'text-xs opacity-70',
    'body-text': 'text-sm opacity-75',

    // Section labels within slides — colored header text
    // Usage: <div label-green>Section Title</div>
    'label-green': 'text-lg font-bold text-green-400',
    'label-red': 'text-lg font-bold text-red-400',
    'label-blue': 'text-lg font-bold text-blue-400',

    // Inline keyword highlight — the deck's primary accent color
    // Usage: <strong accent>keyword</strong> or <span accent>text</span>
    'accent': 'text-green-300 font-bold',

    // Flex centering
    'flex-center': 'flex items-center justify-center',
  },
})
