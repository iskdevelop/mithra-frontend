// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
      '@nuxtjs/color-mode',
      '@nuxtjs/device',
      '@nuxtjs/google-fonts',
      'nuxt-tiptap-editor',
      'nuxt-svgo-loader',
      'nuxt-plotly',
      '@nuxtjs/tailwindcss',
      '@vueuse/nuxt',
      'nuxt-svgo',
    ],
    css: [
        '~/assets/style/tailwindcss.css',
        '~/assets/style/typography.css',
    ],

    colorMode: {
        preference: 'system',
        fallback: 'light',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storage: 'localStorage',
        storageKey: 'nuxt-color-mode',
    },
    googleFonts: {
        outputDir: 'assets',
        stylePath: 'style/googleFont.css',
        fontsDir: 'fonts',
        fontsPath: '../fonts',
        families: {
            'IBM+Plex+Sans': {
                wght: [100, 200, 300, 400, 500, 600, 700],
                ital: [100, 200, 300, 400, 500, 600, 700],
            },
            'IBM+Plex+Serif': {
                wght: [100, 200, 300, 400, 500, 600, 700],
                ital: [100, 200, 300, 400, 500, 600, 700],
            },
            'IBM+Plex+Mono': {
                wght: [100, 200, 300, 400, 500, 600, 700],
                ital: [100, 200, 300, 400, 500, 600, 700],
            },
        },
    },
    tailwindcss: {
        cssPath: [`~/assets/style/tailwind.css`, { injectPosition: 'first' }],
        viewer: true,
        exposeConfig: false,
    },
    svgo: {
        autoImportPath: './assets/'
    }
});