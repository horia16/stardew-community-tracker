import bundles from "@/data/bundles";
import { useMainStore } from "@/stores/main";

export function saveBundles() {
  const mainStore = useMainStore();
  localStorage.setItem("bundles", JSON.stringify(mainStore.bundles));
}

export function saveProgress() {
  const mainStore = useMainStore();
  localStorage.setItem("progress", JSON.stringify(mainStore.bundleProgress));
}

export function loadBundles(data: string | undefined | Array<any> = undefined) {
  const mainStore = useMainStore();
  const bundles = data ? data : localStorage.getItem("bundles");
  if (typeof bundles === "string") {
    mainStore.setBundles(JSON.parse(bundles));
  } else if (bundles) {
    mainStore.setBundles(bundles);
  }
}

export function loadProgress(data: string | undefined | Array<any> = undefined) {
  const mainStore = useMainStore();
  const progress = data ? data : localStorage.getItem("progress");
  if (typeof progress === "string") {
    mainStore.setProgress(JSON.parse(progress));
  } else if (progress) {
    mainStore.setProgress(progress);
  }
}

export function resetToDefault() {
  const mainStore = useMainStore();
  mainStore.setBundles(bundles);
  mainStore.setProgress([]);
  localStorage.setItem("bundles", "[]");
  localStorage.setItem("progress", "[]");
}

export function exportCurrentData() {
  const a = document.createElement("a");
  const blob = new Blob(
    [
      `{
        "version": "0.0.0",
        "bundels": ${localStorage.getItem("bundles")},
        "progress": ${localStorage.getItem("progress")}
        }`
    ],
    { type: "text" }
  );
  const url = URL.createObjectURL(blob);
  a.setAttribute("href", url);
  a.setAttribute("download", `stardew_tracker_${new Date().toISOString()}.json`);
  a.click();
}

export function importData(data: string) {
  const parsed = JSON.parse(data);
  if (typeof parsed === "object" && parsed.version) {
    loadBundles(parsed.bundels);
    loadProgress(parsed.progress);
  }
}
