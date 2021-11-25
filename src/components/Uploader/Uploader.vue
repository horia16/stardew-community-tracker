<template>
  <div class="flex">
    <label
      :for="id"
      class="
        bg-stardew-blue
        rounded
        cursor-pointer
        p-2
        block
        text-sm text-white
        transition
        shadow-lg
        hover:bg-stardew-blue-dark
        text-center
      "
      :class="focused ? 'ring shadow-xl' : ''"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      ref="uploader"
      type="file"
      class="h-[0.1px] opacity-0 w-[0.1px] file-input absolute overflow-hidden"
      style="z-index: -1"
      @change="onFileDrop"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
    />
  </div>
</template>

<script setup lang="ts">
import randomString from "@/functions/random-string";
import { ref } from "vue";
defineProps({
  label: { type: String, default: "Select a file" }
});
const emit = defineEmits<{
  (e: "uploaded", val: string): void;
}>();

const focused = ref(false);
function setFocus(state: boolean) {
  console.log(state);
  focused.value = state;
}
const uploader = ref<HTMLInputElement | null>(null);
const id = randomString();

async function onFileDrop() {
  if (uploader.value && uploader.value.files) {
    const file = uploader.value.files[0];
    const reader = new FileReader();
    reader.onload = async () => {
      if (typeof reader.result === "string") {
        emit("uploaded", reader.result);
      }
    };
    reader.readAsText(file);
  }
}
</script>
<style></style>
