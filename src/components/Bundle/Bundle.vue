<template>
  <card class="relative my-4 transition" :class="completed ? 'backdrop-blur-lg bg-opacity-40' : ''">
    <headless-accordion self :animation-delay="200">
      <accordion-header v-slot="{ isOpen }" class="flex justify-between">
        <div class="flex items-center gap-4">
          <div>
            <img
              :src="imageUrl(`bundles/${bundle.color}.png`)"
              alt="bundle"
              draggable="false"
              @drag.prevent="null"
              class="select-none image-render-pixel"
            />
          </div>
          <div class="text-sm font-bold sm:text-base">
            <span>{{ bundle.name }} </span> -
            <span>{{ bundle.type }} Bundle</span>
          </div>
        </div>
        <accordion-toggle
          aria-label="toggle details"
          class="rounded-full w-10 h-10 flex items-center justify-center focus:(outline-none ring) transition text-4xl"
          :class="
            completed
              ? 'text-green-600 hover:text-green-700  ring-green-600'
              : 'text-stardew-blue hover:text-stardew-blue-dark'
          "
          ><icon icon="uim:arrow-circle-down" class="transition" :class="isOpen ? 'transform rotate-180' : ''"
        /></accordion-toggle>
      </accordion-header>
      <accordion-content>
        <div class="flex flex-col gap-2 mt-4">
          <item
            v-for="(item, index) in bundle.items"
            :key="index"
            :item="item"
            :bundle-key="bundle.key"
            :item-index="index"
          />
        </div>
      </accordion-content>
    </headless-accordion>
  </card>
</template>
<script setup lang="ts">
import { Bundle } from "@/data/types";
import { imageUrl } from "@/functions/image-url";
import { PropType, computed } from "vue";
import { Icon } from "@iconify/vue";
import { HeadlessAccordion, AccordionHeader, AccordionToggle, AccordionContent } from "vue-headless-ui";
import Item from "./Item.vue";
import Card from "../Card/Card.vue";
import { useMainStore } from "@/stores/main";

const props = defineProps({
  bundle: { type: Object as PropType<Bundle>, required: true }
});
const mainStore = useMainStore();
const completed = computed(() => {
  const progress = mainStore.bundleProgress.find(bundle => bundle.key === props.bundle.key);
  if (!progress) {
    return false;
  }
  return !progress.value.includes(false);
});
</script>
