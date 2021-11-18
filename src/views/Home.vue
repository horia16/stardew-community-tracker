<template>
    <div class="">
        <floating-bin />
        <card class="relative !p-0">
            <div
                v-show="mainStore.done.length === 0"
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
                    backdrop-filter backdrop-blur-sm
                    gap-4
                    text-gray-800
                    z-10
                "
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
                        <div class="p-2">
                            <img
                                :src="`/items/${element.sprite}`"
                                alt=""
                                srcset=""
                                draggable="false"
                                class="w-10 h-10 select-none min-w-[1.5rem] min-h-[1.5rem]"
                            />
                        </div>
                    </div>
                </template>
            </draggable>
        </card>
        <div>
            <draggable
                class="flex flex-wrap mt-8 justify-center"
                v-model="mainStore.items"
                item-key="name"
                group="items"
                ghost-class="normal-ghost"
                handle=".handle"
            >
                <template #item="{ element }">
                    <item :item="element" />
                </template>
            </draggable>
        </div>
    </div>
</template>
<script setup lang="ts">
import draggable from "vuedraggable";
import { watch } from "vue";
import { useMainStore } from "../store/main";
import Item from "../components/Item.vue";
import CardFilter from "../components/CardFilter.vue";
import { load, save } from "../save-system";
import { Icon } from "@iconify/vue";
import Card from "../components/Card.vue";
import FloatingBin from "../components/FloatingBin.vue";
const mainStore = useMainStore();
load();
function checkMove(evt: DragEvent) {
    console.log("something", evt);
    // return (evt.draggedContext.element.name!=='apple');
}

watch(
    () => mainStore.done,
    () => {
        save();
    }
);
</script>
<style>
.inv-ghost {
    width: 56px !important;
    height: 56px !important;
    overflow: hidden !important;
}
.inv-ghost .border-ui {
    border: transparent !important;
    background-color: transparent !important;
    border-radius: 0 !important;
}
.inv-ghost .image {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    @apply flex gap-4 items-center cursor-move bg-blue-green shadow;
}
.inv-ghost .image img {
    @apply !w-10 !h-10 select-none !min-w-[1.5rem] !min-h-[1.5rem];
}

.inv-ghost .ghost-hidden {
    display: none;
}
.normal-ghost {
    filter: blur(10px);
    @apply m-2 max-w-[23rem] w-full justify-center items-center;
}
</style>
