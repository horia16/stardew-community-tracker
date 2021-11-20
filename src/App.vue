<template>
    <app-header class="mb-4" />
    <div class="flex justify-center">
        <div class="w-full max-w-6xl mx-4">
            <router-view></router-view>
        </div>
    </div>
    <app-footer />
</template>

<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
