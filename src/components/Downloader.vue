<template>
    <app-button
        @click="download(content, mimeType, filename)"
        class="flex justify-center items-center gap-2 !bg-blue-green !ring-sea-green"
    >
        <icon icon="ic:baseline-download" />
        <span>
            {{ label }}
        </span>
    </app-button>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import AppButton from "./AppButton.vue";
defineProps({
    label: { type: String, default: "Download" },
    content: { type: String, required: true },
    mimeType: { type: String, required: true },
    filename: { type: String, default: "data" }
});
function download(content: string, mimeType: string, filename: string) {
    const a = document.createElement("a");
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    a.setAttribute("href", url);
    a.setAttribute("download", filename);
    a.click();
}
</script>
