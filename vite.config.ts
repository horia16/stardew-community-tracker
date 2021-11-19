import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: "/stardew-community-tracker/"
});
