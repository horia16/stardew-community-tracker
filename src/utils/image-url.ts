export function imageUrl(fileName: string) {
    return new URL(`../assets/${fileName}`, import.meta.url).href;
}
