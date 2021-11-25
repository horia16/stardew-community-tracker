export function imageUrl(fileName: string) {
  return new URL(`../assets/images/${fileName}`, import.meta.url).href;
}
