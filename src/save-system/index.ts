import items, { Item } from "../store/items";
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

export function reset() {
    const mainStore = useMainStore();
    localStorage.setItem("done_items", "[]");
    mainStore.done = [];
    mainStore.items = items;
}

export function loadFromSave() {
    const mainStore = useMainStore();

    mainStore.done = mainStore.items.filter(
        x =>
            mainStore.saveGameItems.find(y => {
                if (x.goldQuality) {
                    return y.id === x.id && y.quality === 2;
                }
                return y.id === x.id;
            })?.completed
    );
    mainStore.items = mainStore.items.filter(x => !mainStore.done.find(y => y.id === x.id));
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
