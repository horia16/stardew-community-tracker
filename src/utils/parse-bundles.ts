import { loadFromSave } from "../save-system";
import { useMainStore } from "../store/main";

function splitToChunks<T>(array: Array<T>, parts: number) {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}

export function parseBundles(
    bundles: Array<{ key: string; value: string }>,
    bundlesProgess: Array<{ key: number; value: Array<boolean> }>
) {
    const mappedBundles = bundles.map(x => {
        const key = x.key.split("/");
        const value = x.value.split("/");
        const type = value[0];
        const reward = value[1];
        const items = value[2].split(" ");
        const mappedItems: Array<{ id: number; quantity: number; quality: number }> = [];
        for (let index = 0; index < items.length; index += 3) {
            mappedItems.push({
                id: Number(items[index]),
                quantity: Number(items[index + 1]),
                quality: Number(items[index + 2])
            });
        }
        const color = value[3];
        return {
            key: Number(key[1]),
            name: key[0],
            type,
            reward,
            items: mappedItems,
            color
        };
    });
    const mappedProgress = bundlesProgess.map(x => ({ key: x.key, value: splitToChunks(x.value, 3)[0] }));

    let items: Array<{
        id: number;
        quantity: number;
        quality: number;
        completed: boolean;
    }> = [];
    mappedBundles.forEach(bundle => {
        items = [
            ...items,
            ...bundle.items.map((x, index) => {
                const savedBundle = mappedProgress.find(y => y.key === bundle.key);
                let completed = false;
                if (savedBundle && savedBundle.value[index] === true) {
                    completed = true;
                }
                return {
                    ...x,
                    completed
                };
            })
        ];
    });

    return items;
}

export function parseSaveGame(save: any) {
    const mainStore = useMainStore();
    if (save) {
        const data = save.SaveGame.bundleData.item as Array<{
            key: { string: { "#text": string } };
            value: { string: { "#text": string } };
        }>;
        // Get the bundle and object data
        const bundles = data.map(x => ({ key: x.key.string["#text"], value: x.value.string["#text"] }));
        // Get the progress of each bundle
        const bundlesProgess: Array<{ key: number; value: Array<boolean> }> = save.SaveGame.locations.GameLocation.find(
            (x: any) => x.name["#text"] === "CommunityCenter"
        )?.bundles.item.map((x: any) => ({
            key: Number(x.key.int["#text"]),
            value: x.value.ArrayOfBoolean.boolean.map((y: any) => (y["#text"] === "true" ? true : false))
        }));
        mainStore.saveGameItems = parseBundles(bundles, bundlesProgess);
        loadFromSave();
        // localStorage.setItem("saved_items", JSON.stringify(mainStore.saveGameItems));
    }
}
