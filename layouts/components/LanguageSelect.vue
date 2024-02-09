<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const url = window?.location.origin

const languages = ref([
  { flag: '/images/flags/us.svg', language: 'en', title: 'English' },
  { flag: '/images/flags/ru.svg', language: 'ru', title: 'Русский' },
  { flag: '/images/flags/uz.svg', language: 'uz', title: 'O`zbekcha' },
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
            :src="url + lang.flag" :alt="lang.title" class="rounded"
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
          <img :src="url + lang.flag" alt="user-image" class="me-2 rounded" height="18" />
          {{ lang.title }}
        </div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
