import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue';
import CkEditorComponent from '~/plugins/ckeditor/CkEditor.vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(CkeditorPlugin);
    nuxtApp.vueApp.component('ckEditor', CkEditorComponent);
});
