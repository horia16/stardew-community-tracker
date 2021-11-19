<template>
    <div class="m-2 max-w-[23rem] w-full transform relative text-gray-800" v-show="shouldView">
        <headless-accordion self :animation-delay="200">
            <accordion-header class="" v-slot="{ isOpen }">
                <card class="flex items-center justify-between">
                    <div class="flex gap-4 items-center">
                        <card class="p-2 bg-blue-green handle cursor-move image border bg-yellow relative">
                            <img
                                :src="`/items/${item.sprite}`"
                                alt=""
                                srcset=""
                                draggable="false"
                                class="w-6 h-6 select-none min-w-[1.5rem] min-h-[1.5rem]"
                            />
                            <img
                                v-if="item.goldQuality"
                                :src="`/ui/gold.webp`"
                                alt=""
                                srcset=""
                                draggable="false"
                                class="w-6 h-6 select-none min-w-[1.5rem] min-h-[1.5rem] absolute bottom-1 left-1"
                            />
                        </card>
                        <div class="ghost-hidden">
                            <div class="font-bold select-none">{{ item.name }}</div>
                        </div>
                    </div>
                    <accordion-toggle
                        aria-label="toggle accordion"
                        class="
                            ghost-hidden
                            bg-gradient-to-r
                            from-sea-green
                            to-shamrock-green
                            h-8
                            w-8
                            min-h-[2rem] min-w-[2rem]
                            shadow-lg
                            flex
                            justify-center
                            items-center
                            text-white
                            rounded-full
                        "
                    >
                        <Icon icon="bx:bxs-down-arrow" :rotate="isOpen ? 2 : 0" />
                    </accordion-toggle>
                </card>
            </accordion-header>
            <accordion-content class="ghost-hidden">
                <card class="flex flex-col gap-4 p-4 ghost-hidden mt-2">
                    <div>
                        <div class="font-bold">Seasons</div>
                        <div class="flex gap-2 flex-wrap">
                            <season v-for="season in item.seasons" :season="season" :key="season" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">Weather</div>
                        <div class="flex gap-2 flex-wrap">
                            <weather v-for="weather in item.weather" :weather="weather" :key="weather" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">Time</div>
                        <div class="flex gap-2 text-xl font-bold">
                            {{ item.time ? `${item.time.start} - ${item.time.end}` : "All day" }}
                        </div>
                    </div>
                    <div>
                        <div class="font-bold mb-2">Locations</div>
                        <div class="flex gap-2 text-xl flex-wrap">
                            <card
                                class="p-2 font-bold text-sm !bg-green"
                                v-for="location in item.foundIn"
                                :key="location"
                            >
                                {{ location }}
                            </card>
                        </div>
                    </div>
                    <div>
                        <div class="font-bold mb-2">Obtained by</div>
                        <div class="flex gap-2 text-xl flex-wrap">
                            <card class="p-2 font-bold text-sm !bg-green" v-for="action in item.foundBy" :key="action">
                                {{ action }}
                            </card>
                        </div>
                    </div>
                </card>
            </accordion-content>
        </headless-accordion>
    </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { HeadlessAccordion, AccordionContent, AccordionHeader, AccordionToggle } from "vue-headless-ui";
import { PropType, computed } from "vue";
import { Item } from "../store/items";
import Season from "./Season.vue";
import Card from "./Card.vue";
import Weather from "./Weather.vue";
import { useMainStore } from "../store/main";
const props = defineProps({
    item: { type: Object as PropType<Item>, required: true }
});
const mainStore = useMainStore();
const shouldView = computed(() =>
    mainStore.filters.length === 0 || mainStore.filters.find(x => [...props.item.seasons, ""].includes(x))
        ? true
        : false
);
// const done = computed(() => (mainStore.done.find(x => x === props.item.name) ? true : false));
</script>
