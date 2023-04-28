<template>
    <lazy-client-only>
        <ck-editor v-bind="$attrs" @input="$emit('update:modelValue', $event)"></ck-editor>
    </lazy-client-only>
</template>
