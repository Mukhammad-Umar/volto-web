<script setup lang="ts">
const slides = ref([
  { image: '/_nuxt/assets/images/carousel/artel-tv.png' },
  { image: '/_nuxt/assets/images/carousel/hoffman-tv.jpg' },
  { image: '/_nuxt/assets/images/carousel/hoffman-wash.jpg' },
  { image: '/_nuxt/assets/images/carousel/artel-fridge.jpg' },
])
</script>

<template>
  <div class="main-carousel-comp bg-black pb-5">
    <v-carousel height="600" class="main-carousel" hide-delimiter-background cover cycle>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img :src="slide.image" width="100%" height="100%" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<style lang="scss">
.main-carousel-comp {
  background-color: var(--bg-black);
}
</style>