<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import Us from '/assets/images/flags/us.svg'
import Ru from '/assets/images/flags/ru.svg'
import Uz from '/assets/images/flags/uz.svg'

const { locale } = useI18n()

const languages = ref([
  { flag: Us, language: 'en', title: 'English' },
  { flag: Ru, language: 'ru', title: 'Русский' },
  { flag: Uz, language: 'uz', title: 'O`zbekcha' },
])

const langsFilter = computed(() => {
  return languages.value.filter((lang) => lang.language !== locale.value)
})

const setLanguage = (lang: string) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<template>
  <v-menu transition="slide-y-transition" location="bottom">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props" min-width="45" class="px-2"> 
        <template v-for="(lang, index) in languages">
          <img
            v-if="lang.language === locale" :key="index"
            id="header-lang-img" height="20"
            :src="lang.flag" :alt="lang.title" class="rounded"
          />
        </template>
      </v-btn>
    </template>
    <v-list class="mt-2">
      <v-list-item 
        v-for="(lang, i) in langsFilter" :key="i"
        @click="setLanguage(lang.language)"
      >
        <div class="d-flex align-center">
          <img :src="lang.flag" alt="user-image" class="me-2 rounded" height="18" />
          {{ lang.title }}
        </div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
