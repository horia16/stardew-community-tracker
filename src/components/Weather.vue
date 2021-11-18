<template>
    <div class="rounded overflow-hidden">
        <img :src="`/weather/${weather}.png`" :alt="weather" draggable="false" class="select-none w-12 h-8 pixelated" />
    </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { Weather } from "../static/enums";
defineProps({
    weather: { type: String as PropType<Weather>, required: true }
});
</script>
