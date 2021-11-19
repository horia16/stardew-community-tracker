<template>
    <div>
        <label
            class="
                p-2
                hover:ring
                focus-visible:ring
                ring-blue-green
                focus:outline-none
                rounded
                bg-shamrock-green
                text-white
                cursor-pointer
                select-none
                flex
                items-center
                justify-center
                gap-2
            "
        >
            <div>
                <icon icon="ic:baseline-upload" />
            </div>
            <span class="text-base leading-normal">{{ label }}</span>
            <input ref="uploader" type="file" @change="onFileDrop" class="hidden" />
        </label>
    </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "@vue/reactivity";
import { parseXml } from "../utils/convert-xml-json";
const props = defineProps({
    parseXml: { type: Boolean, default: false },
    label: { type: String, default: "Select a file" }
});
const emit = defineEmits<{
    (e: "uploaded", val: unknown): void;
}>();

const uploader = ref<HTMLInputElement | null>(null);

async function onFileDrop() {
    if (uploader.value && uploader.value.files) {
        const file = uploader.value.files[0];
        const reader = new FileReader();
        reader.onload = async () => {
            if (typeof reader.result === "string") {
                if (props.parseXml) {
                    const parsed = await parseXml(reader.result);
                    emit("uploaded", parsed);
                } else {
                    emit("uploaded", reader.result);
                }
            }
        };
        reader.readAsText(file);
    }
}
</script>
