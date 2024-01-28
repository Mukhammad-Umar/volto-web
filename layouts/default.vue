<script lang="ts" setup>
const drawer = ref(false)

const items = ref([
  {
    title: 'Foo',
    value: 'foo',
  },
  {
    title: 'Bar',
    value: 'bar',
  },
  {
    title: 'Fizz',
    value: 'fizz',
  },
  {
    title: 'Buzz',
    value: 'buzz',
  },
])
</script>

<template>
  <div class="flex-column">
    <v-app-bar prominent color="black" class="px-5 py-1">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title style="flex: none;">
        Volto
        <!-- <v-img src="/assets/images/volto.jpg" width="45" /> -->
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <NavbarMenus />

      <v-spacer></v-spacer>

      <LanguageSelect />

      <v-btn icon>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>

      <v-btn icon>
        <v-img src="/assets/images/socials/tg.svg" width="21" />
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer>

    <v-main style="--v-layout-left: 0" class="mt-2">
      <NuxtPage />
    </v-main>

    <TheFooter />
  </div>
</template>
