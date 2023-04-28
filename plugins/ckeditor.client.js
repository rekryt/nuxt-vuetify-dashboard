import CKEditor from '@ckeditor/ckeditor5-vue';
import CkEditorComponent from '~/plugins/ckeditor/CkEditor.vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(CKEditor);
    nuxtApp.vueApp.component('ckEditor', CkEditorComponent);
});
