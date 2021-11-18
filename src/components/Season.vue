<template>
    <div class="rounded overflow-hidden">
        <img
            :src="`/seasons/${season}.png`"
            :alt="season"
            draggable="false"
            class="select-none pixelated"
            :class="small ? 'w-6 h-4' : 'w-12 h-8'"
        />
    </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { Season } from "../static/enums";
defineProps({
    season: { type: String as PropType<Season>, required: true },
    small: { type: Boolean, default: false }
});
</script>
