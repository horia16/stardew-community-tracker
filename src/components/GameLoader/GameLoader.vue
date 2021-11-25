<template>
  <app-button @click="openModal = true" class="flex items-center gap-2">
    <icon icon="uim:upload-alt" /> Load Game Save
  </app-button>
  <modal v-model="openModal" header="Load Game Save">
    <div class="mb-4">Please note that this only supports <span class="font-bold">PC</span> saves.</div>
    <div class="mb-8">
      <h2 class="text-sm mb-2">Find your save files:</h2>
      <div class="mb-1">
        <h3 class="text-sm font-bold">Windows</h3>
        <div class="text-sm">%appdata%\StardewValley\Saves</div>
      </div>
      <div>
        <h3 class="text-sm font-bold">Mac / Linux</h3>
        <div class="text-sm">~/.config/StardewValley/Saves</div>
      </div>
    </div>
    <uploader @uploaded="uploaded" label="Select Save" />
  </modal>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Modal from "@/components/Modal/Modal.vue";
import Uploader from "../Uploader/Uploader.vue";
import { parseXmlString } from "@/functions/xml2json";
import { parseBundeProgress, parseBundles } from "@/functions/parse-bundles";
import { useMainStore } from "@/stores/main";
import AppButton from "../AppButton/AppButton.vue";
import { Icon } from "@iconify/vue";

const mainStore = useMainStore();

const openModal = ref(false);

async function uploaded(data: string) {
  const saveGame = parseXmlString(data);
  if (saveGame !== null && typeof saveGame === "object") {
    mainStore.setBundles(parseBundles(saveGame));
    mainStore.setProgress(parseBundeProgress(saveGame));
    openModal.value = false;
  }
}
</script>
