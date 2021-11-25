<template>
  <app-button @click="openModal = true" class="flex items-center gap-2">
    <icon icon="whh:cog" class="hover:rotate-180 transform transition" /> Options
  </app-button>
  <modal v-model="openModal" header="Options">
    <div class="flex flex-col gap-4">
      <div>Import or export your current configuration.</div>
      <app-button @click="exportCurrentData">Export Config</app-button>
      <uploader @uploaded="uploaded" label="Import Config" class="children:(w-full)" />
      <div class="text-xs">App Version {{ version }}</div>
    </div>
  </modal>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Modal from "@/components/Modal/Modal.vue";
import Uploader from "../Uploader/Uploader.vue";
import AppButton from "../AppButton/AppButton.vue";
import { Icon } from "@iconify/vue";
import { exportCurrentData, importData } from "@/functions/save-system";
const version = import.meta.env.PACKAGE_VERSION;
const openModal = ref(false);
async function uploaded(data: string) {
  importData(data);
  openModal.value = false;
}
</script>
