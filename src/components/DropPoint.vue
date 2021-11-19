<template>
    <card class="relative !p-0">
        <div
            class="
                pointer-events-none
                rounded
                absolute
                text-2xl
                flex
                w-full
                h-full
                items-center
                justify-center
                bg-white
                gap-4
                text-gray-800
                z-10
                transition-all
            "
            :class="mainStore.done.length === 0 ? '' : 'opacity-0'"
        >
            <icon class="" icon="twemoji:basket" />
            <div>Drop something here</div>
        </div>
        <draggable
            v-model="mainStore.done"
            group="items"
            ghost-class="inv-ghost"
            class="flex items-center justify-center flex-wrap p-2 min-h-[80px] transition-all gap-1"
            item-key="name"
        >
            <template #item="{ element }">
                <div class="flex gap-4 items-center handle cursor-move bg-blue-green shadow rounded">
                    <div class="p-2 relative">
                        <img
                            :src="imageUrl(`items/${element.sprite}`)"
                            alt=""
                            srcset=""
                            draggable="false"
                            class="w-10 h-10 select-none min-w-[1.5rem] min-h-[1.5rem]"
                        />
                        <img
                            v-if="element.goldQuality"
                            :src="imageUrl(`ui/gold.webp`)"
                            alt=""
                            srcset=""
                            draggable="false"
                            class="w-10 h-10 select-none min-w-[1.5rem] min-h-[1.5rem] absolute bottom-1 left-1"
                        />
                    </div>
                </div>
            </template>
        </draggable>
    </card>
</template>
<script setup lang="ts">
import draggable from "vuedraggable";
import { useMainStore } from "../store/main";
import { Icon } from "@iconify/vue";
import Card from "./Card.vue";
import { imageUrl } from "../utils/image-url";

const mainStore = useMainStore();
</script>
