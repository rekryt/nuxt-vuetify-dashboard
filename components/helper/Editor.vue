<template>
    <ck-editor v-bind="$attrs" @input="$emit('update:modelValue', $event)"></ck-editor>
</template>
