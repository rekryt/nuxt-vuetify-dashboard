<template>
    <v-container fill-height fluid>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe
                    id="gmap_canvas"
                    width="100%"
                    height="100%"
                    src="https://maps.google.com/maps?q=google&t=&z=5&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                ></iframe>
            </div>
        </div>
    </v-container>
</template>

<style>
.mapouter {
    text-align: right;
    width: 100%;
    position: absolute;
}
.gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: calc(100vh - 120px - var(--v-layout-top));
    width: 100%;
}
</style>
