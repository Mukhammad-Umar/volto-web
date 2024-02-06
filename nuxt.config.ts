// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  typescript: {
    typeCheck: true
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ['~/assets/styles/main.scss'],
  components: [
    // ~/calendar-module/components/event/Update.vue => <EventUpdate />
    { path: '~/components' },
    { path: '~/layouts/components' }

    // ~/user-module/components/account/UserDeleteDialog.vue => <UserDeleteDialog />
    // { path: '~/user-module/components', pathPrefix: false },

    // ~/components/special-components/Btn.vue => <SpecialBtn />
    // { path: '~/components/special-components', prefix: 'Special' },
  ]
})
