<template>
    <v-footer id="core-footer">
        <div class="footer-items">
            <a v-for="link in links" :key="link.name" :href="link.Link" class="footer-link">
                {{ link.name }}
            </a>
        </div>
        <v-spacer />
        <span class="font-weight-light copyright">
            &copy; 2019
            <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a>
            , made with
            <v-icon color="tertiary" size="17">mdi-heart</v-icon>
            for a better web
            <br />
            &copy; {{ new Date().getFullYear() }}
            <a href="https://vk.com/krupkin.sergey" target="_blank">
                Rekryt
                <v-icon color="tertiary" size="17">mdi-star</v-icon>
            </a>
            , nuxt3+vuetify3+dashboard
        </span>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        links: [
            { name: 'Home', Link: '/#' },
            { name: 'Creative Tim', Link: 'https://www.creative-tim.com' },
            { name: 'About Us', Link: 'https://creative-tim.com/presentation' },
            { name: 'Blog', Link: 'https://blog.creative-tim.com' },
        ],
    }),
};
</script>

<style lang="scss">
#core-footer {
    flex: 0 0 auto;
    z-index: 0;
    margin-top: auto;
    height: 100px;
}
.copyright {
    font-size: 14px;
}
.footer-items {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
}
.footer-link {
    margin: 5px 5px 5px 0;
}
</style>
