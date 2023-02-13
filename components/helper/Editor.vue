<template>
    <client-only>
        <helper-editor-ck-editor v-bind="$attrs" @input="$emit('update:modelValue', $event)"></helper-editor-ck-editor>
    </client-only>
</template>
