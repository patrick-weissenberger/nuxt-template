const configNuxt = defineNuxtConfig({
  compatibilityDate: "latest",
  devtools: {
    enabled: true,
  },
  devServer: {
    port: 8080,
  },
  css: ["@/assets/css/tailwind.css"],
  modules: ["@nuxt/ui", "@nuxt/image"],
  plugins: [],
});

export default configNuxt;
