import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
    const cookieTheme = useCookieTheme();

    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: cookieTheme.value && cookieTheme.value !== 'system' ? cookieTheme.value : 'light',
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: '#4caf50',
                        secondary: '#4caf50',
                        background: '#FFFFFF',
                        surface: '#FFFFFF',
                        'primary-darken-1': '#3700B3',
                        'secondary-darken-1': '#018786',
                        error: '#f55a4e',
                        info: '#00d3ee',
                        success: '#5cb860',
                        warning: '#ffa21a',
                    },
                },
            },
        },
    });

    nuxtApp.vueApp.use(vuetify);
});
