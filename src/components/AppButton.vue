<template>
    <headless-button
        class="
            p-2
            hover:ring
            focus-visible:ring
            ring-blue-green
            focus:outline-none
            rounded-lg
            bg-shamrock-green
            text-white
        "
    >
        <slot></slot>
    </headless-button>
</template>
<script setup lang="ts">
import { HeadlessButton } from "vue-headless-ui";
</script>
