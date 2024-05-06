// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Khametov Artem',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    devtools: { enabled: true },
    css: ['~/assets/scss/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        'nuxt-svgo',
        'vue3-carousel-nuxt',
    ],
    carousel: {
        prefix: 'Nuxt',
    },
    svgo: {
        autoImportPath: '~/assets/icons/',
    },
    runtimeConfig: {
        public: {
            apiBase: 'http://localhost:3000',
        },
    },
})
