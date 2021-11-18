import { Item } from "../store/items";
import { useMainStore } from "../store/main";

export function load() {
    const mainStore = useMainStore();
    const stored = localStorage.getItem("done_items");
    if (stored) {
        const items = JSON.parse(stored) as Array<Item>;
        mainStore.items = mainStore.items.filter(x => !items.find(y => y.name === x.name));
        mainStore.done = items;
    }
}

export function save() {
    const mainStore = useMainStore();
    localStorage.setItem("done_items", JSON.stringify(mainStore.done));
}

export function importItems() {
    //
}

export function exportItems() {
    //
}
