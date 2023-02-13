import CKEditor from '@ckeditor/ckeditor5-vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(CKEditor);
});
