import { execSync } from "child_process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-01-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content"],
  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
  },
  appConfig: {
    commitHash: execSync("git rev-parse HEAD").toString().trim() || "unknown",
  },
  // waiting for nuxt 4.3 to support appLayout in routeRules
  // routeRules: {
  //   "/tools/**": { appLayout: "tools" },
  // },
});
