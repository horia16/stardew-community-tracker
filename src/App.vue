<template>
  <navbar />
  <div class="flex justify-center">
    <main class="max-w-7xl mx-2 w-full">
      <card class="mt-8">
        <div class="flex items-center gap-3">
          <icon icon="uim:exclamation-triangle" class="text-5xl" />
          <div class="text-md">
            This software is still in development. You may encounter some bugs or missing items/broken ids.
          </div>
        </div>
      </card>
      <bundle v-for="bundle in mainStore.bundleList" :key="bundle.key" :bundle="bundle" />
    </main>
  </div>
  <app-footer />
  <welcome />
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar/Navbar.vue";
import Bundle from "./components/Bundle/Bundle.vue";
import { useMainStore } from "./stores/main";
import Card from "./components/Card/Card.vue";
import { Icon } from "@iconify/vue";
import { loadBundles, loadProgress } from "./functions/save-system";
import Welcome from "./components/Welcome/Welcome.vue";
import AppFooter from "./components/AppFooter/AppFooter.vue";

const mainStore = useMainStore();
loadBundles();
loadProgress();
</script>
