<template>
    <v-navigation-drawer id="app-drawer" v-model="inputValue" width="260" elevation="5" floating>
        <v-list-item class="text-center" two-line>
            <v-avatar color="white">
                <v-img
                    src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-light.svg"
                    height="34"
                    contain
                />
            </v-avatar>

            <v-list-item-title class="title">VUETIFY 3</v-list-item-title>
        </v-list-item>

        <v-divider class="mx-3 mb-3" />

        <v-list density="compact" nav>
            <v-list-item v-for="(link, i) in links" :key="i" :to="link.to" active-class="primary white--text">
                <template #prepend>
                    <v-icon>{{ link.icon }}</v-icon>
                </template>
                <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
        </v-list>

        <template #append>
            <v-list density="compact" nav>
                <v-list-item to="/tpgrade">
                    <template #prepend>
                        <v-icon>mdi-package-up</v-icon>
                    </template>
                    <v-list-item-title class="font-weight-light">Something else</v-list-item-title>
                </v-list-item>
            </v-list>
        </template>
    </v-navigation-drawer>
</template>

<script>
// Utilities

import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../../stores/app';

export default {
    data: () => ({
        links: [
            {
                to: '/',
                icon: 'mdi-view-dashboard',
                text: 'Dashboard',
            },
            {
                to: '/user-profile',
                icon: 'mdi-account',
                text: 'User Profile',
            },
            {
                to: '/table-list',
                icon: 'mdi-clipboard-outline',
                text: 'Table List',
            },
            {
                to: '/typography',
                icon: 'mdi-format-font',
                text: 'Typography',
            },
            {
                to: '/icons',
                icon: 'mdi-chart-bubble',
                text: 'Icons',
            },
            {
                to: '/maps',
                icon: 'mdi-map-marker',
                text: 'Maps',
            },
            {
                to: '/notifications',
                icon: 'mdi-bell',
                text: 'Notifications',
            },
        ],
    }),

    computed: {
        ...mapState(useAppStore, ['color']),
        inputValue: {
            get() {
                return useAppStore().drawer;
            },
            set(val) {
                this.setDrawer(val);
            },
        },
    },

    methods: {
        ...mapActions(useAppStore, ['setDrawer', 'toggleDrawer']),
    },
};
</script>
