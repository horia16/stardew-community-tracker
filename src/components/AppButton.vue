<template>
    <headless-button
        class="
            p-2
            px-4
            hover:ring
            focus-visible:ring
            ring-blue-green
            focus:outline-none
            rounded
            bg-shamrock-green
            text-white
            select-none
        "
    >
        <slot></slot>
    </headless-button>
</template>
<script setup lang="ts">
import { HeadlessButton } from "vue-headless-ui";
</script>
