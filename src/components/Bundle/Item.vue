<template>
  <div class="p-2 bg-white rounded-lg bg-opacity-60">
    <headless-accordion self :animation-delay="200">
      <accordion-header v-slot="{ isOpen }">
        <div v-if="item.data" class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button
              class="
                rounded-full
                w-10
                h-10
                flex
                items-center
                justify-center
                focus:(outline-none
                ring)
                transition
                text-4xl
              "
              :class="item.completed ? 'text-green-600 hover:text-green-800' : 'text-red-600 hover:text-red-800'"
              @click="toggle"
            >
              <icon :icon="item.completed ? 'uim:check-circle' : 'uim:exclamation-circle'" />
            </button>

            <img
              width="32"
              height="32"
              :src="imageUrl(`items/${item.data.name.replaceAll(' ', '_')}.png`)"
              :alt="item.data.name"
              draggable="false"
              @drag.prevent="null"
              class="select-none image-render-pixel"
            />
            <div>
              {{ item.quality === 2 ? "Gold Star" : "" }} {{ item.data.name }}
              <span class="font-bold">{{ item.quantity !== 1 ? `X${item.quantity}` : "" }}</span>
            </div>
          </div>
          <div>
            <accordion-toggle
              aria-label="toggle details"
              class="
                rounded-full
                w-10
                h-10
                flex
                items-center
                justify-center
                focus:(outline-none
                ring)
                text-stardew-blue
                hover:text-stardew-blue-dark
                transition
                text-4xl
              "
              ><icon icon="uim:arrow-circle-down" class="transition" :class="isOpen ? 'transform rotate-180' : ''"
            /></accordion-toggle>
          </div>
        </div>
        <div v-else class="bg-red-700 text-white p-2 rounded-lg my-2">
          Data is missing for id: <span class="font-bold">{{ item.id }}</span>
        </div>
      </accordion-header>
      <accordion-content>
        <div v-if="item.data" class="mt-4 flex flex-col gap-2">
          <div>{{ item.data.description }}</div>
          <!-- <div class="w-full h-1 bg-black"></div> -->
          <div class="">
            <div class="mt-2 text-sm">Season:</div>
            <div class="flex gap-2">
              <div
                class="bg-stardew-blue-dark text-white font-bold text-xs p-2 rounded-lg"
                v-for="season in item.data.seasons"
                :key="season"
              >
                {{ season }}
              </div>
            </div>
          </div>
          <div v-if="item.data.locations.length > 0">
            <div class="mt-2 text-sm">Found in:</div>
            <div class="flex gap-2">
              <div
                class="bg-stardew-blue text-white font-bold text-xs p-2 rounded-lg"
                v-for="location in item.data.locations"
                :key="location"
              >
                {{ location }}
              </div>
            </div>
          </div>
          <div v-if="item.data.obtained.length > 0">
            <div class="mt-2 text-sm">Obtained by:</div>
            <div class="flex gap-2">
              <div
                class="bg-stardew-green text-white font-bold text-xs p-2 rounded-lg"
                v-for="action in item.data.obtained"
                :key="action"
              >
                {{ action }}
              </div>
            </div>
          </div>
        </div>
      </accordion-content>
    </headless-accordion>
  </div>
</template>
<script setup lang="ts">
import { BundleItem } from "@/data/types";
import { imageUrl } from "@/functions/image-url";
import { PropType } from "vue";
import { Icon } from "@iconify/vue";
import { HeadlessAccordion, AccordionHeader, AccordionToggle, AccordionContent } from "vue-headless-ui";
import AppButton from "../AppButton/AppButton.vue";
import { useMainStore } from "@/stores/main";
const props = defineProps({
  item: { type: Object as PropType<BundleItem>, required: true },
  bundleKey: { type: Number, required: true },
  itemIndex: { type: Number, required: true }
});
const mainStore = useMainStore();

function toggle() {
  console.log("Toggle");
  mainStore.toggleItem(props.itemIndex, props.bundleKey);
}
</script>
