// nuxt.config.ts
export default defineNuxtConfig({
   devtools: { enabled: true },
   css: ["@/assets/css/main.css"],
   modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "@nuxt/image"],
   app: {
      head: {
         title: "DPD-Task",
         htmlAttrs: { lang: "en" },
         meta: [
            { charset: "utf-8" },
            {
               name: "viewport",
               content: "width=device-width, initial-scale=1",
            },
         ],
      },
   },
   vite: {
      css: {
         preprocessorOptions: {
            scss: {
               additionalData: `@import "@/assets/css/common/_fonts.scss";`,
            },
         },
      },
   },
});
