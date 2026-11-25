import { defineConfig } from "vite";

// Stamps the build time into the page, so each deploy is visibly a fresh build.
export default defineConfig({ define: { __BUILT_AT__: JSON.stringify(new Date().toISOString()) } });
