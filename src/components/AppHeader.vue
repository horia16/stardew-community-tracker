<template>
    <nav class="flex gap-4 items-center flex-wrap justify-between shadow-lg bg-white p-4">
        <div class="font-bold text-sea-green">Community Center Tracker</div>
        <div>
            <uploader parse-xml @uploaded="parseSaveGame" label="Upload Game Save (PC only)" />
        </div>
        <div class="flex gap-2">
            <uploader parse-xml @uploaded="parseSaveGame" label="Upload Config" />
            <downloader label="Download Config" content="test" mime-type="text" filename="test.json" />
        </div>
        <div class="flex items-center gap-2">
            <div class="text-gray-700">Filter</div>
            <div class="flex gap-2 flex-wrap justify-center">
                <app-button
                    v-for="x in [Season.Spring, Season.Summer, Season.Fall, Season.Winter]"
                    :key="x"
                    class="flex gap-2 items-center w-32"
                    :class="
                        hasFilter(x) ? 'bg-gradient-to-l from-sea-green to-blue-green' : '!bg-white !text-blue-green'
                    "
                    @click="toggleSeasonFilter(x)"
                >
                    <season-cmp small :season="x" />
                    {{ x }}
                </app-button>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import Card from "./Card.vue";
import AppButton from "./AppButton.vue";
import SeasonCmp from "./Season.vue";
import { Season } from "../static/enums";
import { useMainStore } from "../store/main";
import Uploader from "./Uploader.vue";
import { parseSaveGame } from "../utils/parse-bundles";
import Downloader from "./Downloader.vue";

const mainStore = useMainStore();

function hasFilter(type: string) {
    return mainStore.filters.find(x => x === type) ? true : false;
}

function toggleSeasonFilter(season: Season) {
    if (mainStore.filters.find(x => x === season)) {
        mainStore.removeFilter(season);
    } else {
        mainStore.addFilter(season);
    }
}
</script>
