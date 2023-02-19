<template>
    <v-app-bar id="core-app-bar" absolute color="transparent" flat height="88">
        <v-toolbar-title class="font-weight-light align-self-center">
            <v-btn v-show="!responsive" icon @click.stop="onClick">
                <v-icon>mdi-view-list</v-icon>
            </v-btn>
            {{ title }}
        </v-toolbar-title>

        <v-spacer />

        <v-toolbar-items class="flex-fill">
            <v-row align="center" class="mx-0">
                <v-text-field class="mr-4 purple-input" color="purple" label="Search..." hide-details />

                <v-btn height="48" to="/" icon>
                    <v-icon color="tertiary">mdi-view-dashboard</v-icon>
                </v-btn>

                <client-only>
                    <v-menu bottom left offset-y transition="slide-y-transition">
                        <template #activator="{ props }">
                            <v-btn class="toolbar-items" height="48" to="/notifications" v-bind="props" icon>
                                <v-badge color="error">
                                    <template #badge>
                                        {{ notifications.length }}
                                    </template>
                                    <v-icon color="tertiary">mdi-bell</v-icon>
                                </v-badge>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in notifications" :key="index" :value="index">
                                <v-list-item-title>{{ item }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </client-only>

                <v-btn height="48" icon @click="toggleTheme">
                    <v-icon color="tertiary">mdi-theme-light-dark</v-icon>
                </v-btn>

                <v-btn to="/user-profile" height="48" icon>
                    <v-icon color="tertiary">mdi-account</v-icon>
                </v-btn>
            </v-row>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
// Utilities
import { mapActions } from 'pinia';
import { useAppStore } from '../../stores/app';
import { useDisplay, useTheme } from 'vuetify';

export default {
    setup() {
        const theme = useTheme();
        const cookieTheme = useCookieTheme();

        return {
            theme,
            toggleTheme: () => {
                const themeValue = theme.global.current.value.dark ? 'light' : 'dark';
                theme.global.name.value = themeValue;
                cookieTheme.value = themeValue;
            },
        };
    },

    data: () => ({
        notifications: [
            'Mike, John responded to your email',
            'You have 5 new tasks',
            "You're now a friend with Andrew",
            'Another Notification',
            'Another One',
        ],
        title: null,
    }),

    computed: {
        responsive() {
            const display = useDisplay();
            return display.lgAndUp.value;
        },
    },

    watch: {
        $route(val) {
            this.title = val.name;
        },
    },

    created() {
        this.setDrawer(this.responsive);
        this.title = this.$route.name;
    },

    methods: {
        ...mapActions(useAppStore, ['setDrawer', 'toggleDrawer']),
        onClick() {
            this.setDrawer(!useAppStore().drawer);
        },
    },
};
</script>

<style>
/* Fix coming in v2.0.8 */
#core-app-bar {
    width: auto;
}

#core-app-bar a {
    text-decoration: none;
}
</style>
