import eslintPlugin from 'vite-plugin-eslint';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        strict: true,
    },
    app: {
        head: {
            title: 'nuxt3-vuetify3-dashboard',
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    charset: 'utf-8',
                },
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
                },
            ],
        },
    },
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', 'assets/scss/default.scss'],
    modules: [
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // automatically imports `defineStore`
                    'defineStore', // import { defineStore } from 'pinia'
                    // automatically imports `defineStore` as `definePiniaStore`
                    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
                ],
            },
        ],
        '@kevinmarrec/nuxt-pwa',
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        plugins: [eslintPlugin()],
        define: {
            'process.env.DEBUG': false,
        },
        server: {
            /**
             * If develop from docker
            watch: {
                usePolling: true,
            },
            */
        },
    },
    experimental: {
        inlineSSRStyles: false
    }
});
