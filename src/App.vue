<template>
    <card-filter class="mb-4" />
    <div class="flex justify-center">
        <div class="w-full max-w-6xl mx-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import CardFilter from "./components/CardFilter.vue";
</script>
