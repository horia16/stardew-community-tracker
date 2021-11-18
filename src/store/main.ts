import { defineStore } from "pinia";
import items, { Item } from "./items";

export const useMainStore = defineStore("main", {
    state: () => ({ items, filters: [] as Array<string>, done: [] as Array<Item> }),
    actions: {
        addFilter(filter: string) {
            this.filters.push(filter);
        },
        removeFilter(type: string) {
            this.filters = this.filters.filter(x => x !== type);
        }
    }
});
