<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'

const modules = [FreeMode, Navigation, Thumbs]

const { productId, viewDialog }: any = defineProps<{
  productId: Number
  viewDialog: Object
}>()

const thumbsSwiper = ref(null)

const productInfos = ref([
  { label: 'Энергопотребление', value: 'A+' },
  { label: 'Срок службы', value: '10 лет' },
  { label: 'Разрешение экрана', value: '1366x768' },
  { label: 'Потребляемая мощность', value: '45 Вт' },
  { label: 'Ширина', value: '73 см' },
  { label: 'Высота', value: '43.5 см' },
  { label: 'Глубина', value: '9 см' },
  { label: 'Вес', value: '4.36 кг' },
])

watch(() => viewDialog.dialog, val => {
  if (!val) setThumbsSwiper(null)
})

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}
</script>

<template>
  <v-dialog v-model="viewDialog.dialog" class="single-product-dialog" width="1000">
    <v-card>
      <v-toolbar color="white" class="dialog-product-toolbar">
        <v-btn @click="$emit('emit:close')" icon>
          <v-icon color="grey">mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="pt-0">
        <v-row class="my-0">
          <v-col cols="12" lg="6" md="6" class="pt-0">
            <div class="quick-view-images mt-2">
              <div class="quick-gallery-images">
                <swiper
                  :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }"
                  :thumbs="{ swiper: thumbsSwiper }"
                  :spaceBetween="10" :navigation="true"
                  :loop="true" :modules="modules" class="mySwiper2"
                >
                  <swiper-slide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" width="100%" />
                  </swiper-slide>
                  <swiper-slide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" width="100%" />
                  </swiper-slide>
                  <swiper-slide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" width="100%" />
                  </swiper-slide>
                  <swiper-slide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" width="100%" />
                  </swiper-slide>
                  <swiper-slide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" width="100%" />
                  </swiper-slide>
                </swiper>
              </div>

              <div class="quick-gallery-thumbs">
                <swiper
                  @swiper="setThumbsSwiper" class="mySwiper"
                  :loop="true" :spaceBetween="10" :slidesPerView="4"
                  :freeMode="true" :watchSlidesProgress="true" :modules="modules"
                >
                  <swiper-slide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" width="100%" />
                  </swiper-slide>
                  <swiper-slide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" width="100%" />
                  </swiper-slide>
                  <swiper-slide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" width="100%" />
                  </swiper-slide>
                  <swiper-slide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" width="100%" />
                  </swiper-slide>
                  <swiper-slide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" width="100%" />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </v-col>

          <v-col cols="12" lg="6" md="6" class="pt-0">
            <div class="quick-view-description">
              <h4 class="product-name">Televizor VOLTO LED 65VUW-9000 Smart</h4>
              <div class="price d-flex align-center mt-2">
                <div class="sale-price text-info">4 999 000 сум</div>
                <!-- <div class="old-price">5 999 000</div> -->
              </div>
              <p class="mt-2">
                Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do
                eiusmod temporf incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis tyu nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate.
              </p>
              <div class="product-buttons">
                <v-btn rounded="lg" height="55" class="mr-4">
                  <v-img :src="'/_nuxt/assets/images/pay-systems/payme.svg'" width="100" />
                </v-btn>
                <v-btn rounded="lg" height="55">
                  <v-img :src="'/_nuxt/assets/images/pay-systems/uzum.svg'" width="100" />
                </v-btn>
              </div>
              <div class="product-info">
                <div v-for="info in productInfos" class="single-info">
                  <span class="label">{{ info.label }}:</span>
                  <span class="value">{{ info.value }}</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style lang="scss">
.dialog-product-toolbar .v-toolbar__content {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 960px) {
  .single-product-dialog {
    .v-overlay__content {
      width: 600px !important;
    }
  }
}
</style>