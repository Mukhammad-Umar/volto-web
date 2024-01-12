<script lang="ts" setup>

</script>

<template>
  <v-layout>
    <v-app-bar color="black" class="px-5 py-1">
      <v-app-bar-title style="flex: none;">
        {{ $t('main') }}
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

    <v-main style="--v-layout-left: 0" class="mt-2">
      <NuxtPage />
    </v-main>
  </v-layout>
</template>
