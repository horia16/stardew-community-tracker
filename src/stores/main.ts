import { createFalseBooleanArray } from "@/functions/empty-boolean-array";
import { saveBundles, saveProgress } from "@/functions/save-system";
import { defineStore } from "pinia";
import bundles from "../data/bundles";
import items from "../data/items";
import { Bundle, BundleProgress } from "../data/types";
export const useMainStore = defineStore("main", {
  state: () => ({
    bundles,
    items,
    bundleProgress: [] as Array<BundleProgress>
  }),
  actions: {
    setBundles(bundles: Array<Bundle>) {
      this.bundles = bundles;
      saveBundles();
    },
    setProgress(progress: Array<BundleProgress>) {
      this.bundleProgress = progress;
      saveProgress();
    },
    toggleItem(itemIndex: number, bundleKey: number) {
      const bundle = this.bundles.find(bundle => bundle.key === bundleKey);
      let progressData = this.bundleProgress.find(bundle => bundle.key === bundleKey);
      if (!progressData && bundle) {
        progressData = {
          key: bundleKey,
          value: createFalseBooleanArray(bundle.items.length)
        };
        this.bundleProgress.push(progressData);
      }
      if (progressData && itemIndex != null) {
        progressData.value[itemIndex] = !progressData.value[itemIndex];
      }
      saveProgress();
    }
  },
  getters: {
    bundleList: state => {
      return state.bundles.map(bundle => {
        const items = bundle.items.map((item, index) => {
          const data = state.items.find(x => x.id === item.id);
          const completed = state.bundleProgress.find(x => x.key === bundle.key)?.value[index];
          return {
            ...item,
            data,
            completed
          };
        });

        return {
          ...bundle,
          items
        };
      });
    }
  }
});
