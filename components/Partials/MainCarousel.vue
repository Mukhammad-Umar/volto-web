<script setup lang="ts">
import ArtelTv from '/assets/images/carousel/artel-tv.png'
import HoffmanTv from '/assets/images/carousel/hoffman-tv.jpg'
import HoffmanWash from '/assets/images/carousel/hoffman-wash.jpg'
import ArtelFridge from '/assets/images/carousel/artel-fridge.jpg'

const slides = ref([
  { image: ArtelTv },
  { image: HoffmanTv },
  { image: HoffmanWash },
  { image: ArtelFridge },
])
</script>

<template>
  <div class="main-carousel-comp position-relative bg-black">
    <div id="main-carousel"></div>

    <v-carousel class="main-carousel" height="auto" hide-delimiter-background cover> <!-- cycle -->
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img :src="slide.image" max-width="91%" class="main-carousel-img mt-7 mb-13 mx-auto" />
      </v-carousel-item>
    </v-carousel>

    <div id="goods-scroll"></div>
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
      img {
        object-fit: fill;
      }
  }
}

@media (max-width: 600px) {
  .main-carousel {
    .main-carousel-img {
      margin-bottom: 40px !important;
    }
    .v-window__controls .v-btn {
      width: 30px !important;
      height: 30px !important;
      i::before {
        font-size: 18px;
      }
    }

    .v-carousel__controls .v-btn {
      width: 20px !important;
      height: 20px !important;
      i::before {
        font-size: 12px;
      }
    }
  }
}

@media (max-width: 500px) {
  .main-carousel {
    .main-carousel-img {
      margin-bottom: 25px !important;
    }

    .v-window__controls .v-btn {
      width: 20px !important;
      height: 20px !important;
      .v-btn__content {
        height: 18px;
        i::before {
          font-size: 15px;
        }
      }
    }

    .v-carousel__controls .v-btn {
      width: 16px !important;
      height: 16px !important;
      i::before {
        font-size: 10px;
      }
    }

    .v-carousel__controls {
      height: 30px;
    }
  }
}
</style>