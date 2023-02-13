<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        // The configuration of the editor.
        config: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    emits: ['input'],
    data() {
        return {
            editor: ClassicEditor,
            editorData: '',
        };
    },
    computed: {
        data: {
            set(value) {
                this.editorData = value;
                this.$emit('input', value);
            },
            get() {
                return this.editorData;
            },
        },
    },
    created() {
        this.editorData = this.value;
    },
};
</script>
<template>
    <ckeditor v-model="data" :editor="editor" :config="config"></ckeditor>
</template>
<style lang="scss">
.ck-editor {
    color: var(--v-theme-on-secondary);
    &__editable {
        background-color: var(--v-theme-background) !important;
    }
}
</style>
