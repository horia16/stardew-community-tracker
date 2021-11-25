<template>
  <headless-dialog
    v-model="model"
    class="bg-black bg-opacity-30 backdrop-filter backdrop-blur flex items-center justify-center max-h-screen"
  >
    <dialog-content class="w-full max-w-2xl slide-in-bottom mx-2 max-h-screen">
      <div class="bg-white rounded-lg shadow w-full bg-opacity-90">
        <div class="flex justify-between items-center p-4">
          <h1 class="font-bold text-xl">{{ header }}</h1>
          <button
            class="
              rounded-full
              w-10
              h-10
              focus:(outline-none
              ring)
              text-stardew-blue
              hover:text-stardew-blue-dark
              transition
            "
            aria-label="Close modal"
            @click="model = false"
          >
            <icon icon="uim:times-circle" class="w-10 h-10" />
          </button>
        </div>
        <div class="w-full overflow-auto max-h-[calc(100vh-15rem)] p-4">
          <slot />
        </div>
      </div>
    </dialog-content>
  </headless-dialog>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { HeadlessDialog, DialogContent } from "vue-headless-ui";
import { Icon } from "@iconify/vue";
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  header: { type: String, default: null }
});
const emit = defineEmits<{ (e: "update:modelValue", val: boolean): void }>();

const model = computed({
  get: () => props.modelValue,
  set: val => emit("update:modelValue", val)
});
</script>
<style>
.slide-in-bottom {
  animation: slide-in-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes slide-in-bottom {
  0% {
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
