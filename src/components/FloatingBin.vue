<template>
    <div class="fixed right-8 bottom-8 z-10">
        <div class="relative">
            <div
                class="bg-white rounded flex items-center justify-center hover:shadow-2xl transition-all"
                :class="isDraggingOver ? 'w-16 h-16 text-5xl shadow-2xl' : 'shadow-md w-14 h-14 text-4xl'"
            >
                <icon class="" icon="twemoji:basket" />
            </div>
            <draggable
                v-model="mainStore.done"
                group="items"
                class="absolute top-0 left-0 w-14 h-14 opacity-0"
                ghost-class="scale-50"
                @dragenter="dragEnter"
                @add="dragLeave"
                item-key="name"
            >
                <template #item="{ element }">
                    <div class="hidden">{{ element.name }}</div>
                </template>
            </draggable>
        </div>
    </div>
</template>
<script setup lang="ts">
import draggable from "vuedraggable";
import { useMainStore } from "../store/main";
import { Icon } from "@iconify/vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
const mainStore = useMainStore();
const isDraggingOver = ref(false);
function dragEnter() {
    console.log("enter");
    isDraggingOver.value = true;
}
function dragLeave() {
    console.log("leave");
    isDraggingOver.value = false;
}
onMounted(() => {
    // window.addEventListener("drop", dragLeave);
});
onBeforeUnmount(() => {
    // window.removeEventListener("drop", dragLeave);
});
</script>
