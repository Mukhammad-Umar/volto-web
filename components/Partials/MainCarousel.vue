<script setup lang="ts">
const slides = ref([
  { image: '/_nuxt/assets/images/carousel/artel-tv.png' },
  { image: '/_nuxt/assets/images/carousel/hoffman-tv.jpg' },
  { image: '/_nuxt/assets/images/carousel/hoffman-wash.jpg' },
  { image: '/_nuxt/assets/images/carousel/artel-fridge.jpg' },
])
</script>

<template>
  <div class="main-carousel-comp bg-black">
    <v-carousel class="main-carousel" height="550" hide-delimiter-background cycle cover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img :src="slide.image" max-width="91%" max-height="470" class="main-carousel-img my-7 mx-auto" cover />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<style lang="scss">
.main-carousel-comp {
  background-color: var(--bg-black);
  .main-carousel-img {
    border-radius: 15px;
    box-shadow: 
      rgb(255 255 255 / 11%) 0px 24px 25px, 
      rgb(255 255 255 / 12%) 0px -12px 30px, 
      rgb(255 255 255 / 3%) 0px 4px 6px, 
      rgb(255 255 255 / 5%) 0px 12px 13px, 
      rgb(255 255 255 / 9%) 0px -3px 5px;
  }
}
</style>