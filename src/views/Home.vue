<template>
    <div>
        <floating-bin />
        <drop-point />
        <div>
            <draggable
                class="flex flex-wrap mt-8 justify-center"
                v-model="mainStore.items"
                item-key="name"
                group="items"
                ghost-class="normal-ghost"
                handle=".handle"
                @end="mainStore.isDraggingElement = false"
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
import { load, save } from "../save-system";
import FloatingBin from "../components/FloatingBin.vue";
import DropPoint from "../components/DropPoint.vue";
const mainStore = useMainStore();
load();

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
    margin: 0px !important;
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
