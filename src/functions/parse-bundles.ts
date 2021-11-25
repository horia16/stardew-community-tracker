export function parseBundles(gameSave: Record<string, any>) {
  try {
    const gameBundleData = (
      gameSave.SaveGame.bundleData.item as Array<{
        key: { string: string };
        value: { string: string };
      }>
    )
      .map(bundle => {
        const key = bundle.key.string.split("/");
        const value = bundle.value.string.split("/");
        const type = value[0];
        const reward = value[1];
        const color = Number(value[3]);
        const items = value[2].split(" ");
        const mappedItems: Array<{
          id: number;
          quantity: number;
          quality: number;
        }> = [];
        for (let index = 0; index < items.length; index += 3) {
          if (![639, 640, 641, 643, 642, 632].includes(Number(items[index])))
            mappedItems.push({
              id: Number(items[index]),
              quantity: Number(items[index + 1]),
              quality: Number(items[index + 2])
            });
        }
        return {
          key: Number(key[1]),
          name: key[0],
          type,
          reward,
          items: mappedItems,
          color
        };
      })
      .sort((a, b) => (a.key > b.key ? 1 : -1));
    return gameBundleData;
  } catch (e) {
    throw new Error("Invalid save file: Can not find bundle data");
  }
}

function splitToChunks<T>(array: Array<T>, parts: number) {
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

export function parseBundeProgress(gameSave: Record<string, any>) {
  const communityCenter: Record<string, any> | undefined = gameSave.SaveGame.locations.GameLocation.find(
    (x: any) => x.name === "CommunityCenter"
  );
  if (communityCenter) {
    const bundlesProgess: Array<{ key: number; value: Array<boolean> }> = (
      communityCenter.bundles.item as Array<{
        key: { int: number };
        value: { ArrayOfBoolean: { boolean: Array<boolean> } };
      }>
    )
      .map(bundle => ({
        key: bundle.key.int,
        value: splitToChunks(bundle.value.ArrayOfBoolean.boolean, 3)[0]
      }))
      .sort((a, b) => (a.key > b.key ? 1 : -1));
    return bundlesProgess;
  } else {
    throw new Error("Invalid save file: Can not find bundle progress");
  }
}
