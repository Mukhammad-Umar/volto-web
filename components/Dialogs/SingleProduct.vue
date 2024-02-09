<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { URL_IMG } from '@/defaults'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'
import filters from '~/filters'

const modules = [FreeMode, Navigation, Thumbs]

const props: any = defineProps({ productId: String, viewDialog: Object })

const { locale } = useI18n()
const product: any = ref({})
const thumbsSwiper = ref(null)
const api: any = useNuxtApp().$api
const viewDialog = ref(props.viewDialog)

const carouselImg = ref([])
const productInfos: any = ref([])

watch(() => props.viewDialog.dialog, val => {
  if (!val) setThumbsSwiper(null)
  else viewProduct()
})

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

const viewProduct = async () => {
  const { data } = await api.get(`api/products/getProductById/${props.productId}`)
  product.value = data
  carouselImg.value = product.value.carouselImg?.split('; ')
  productInfos.value = product.value.characteristic_ru.split('. ')
}
</script>

<template>
  <v-dialog v-model="viewDialog.dialog" :scroll-strategy="'none'" class="single-product-dialog" width="1000">
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
                  <swiper-slide v-for="img in carouselImg">
                    <img :src="URL_IMG + img" width="100%" />
                  </swiper-slide>
                </swiper>
              </div>

              <div class="quick-gallery-thumbs">
                <swiper
                  @swiper="setThumbsSwiper" class="mySwiper"
                  :loop="true" :spaceBetween="10" :slidesPerView="4"
                  :freeMode="true" :watchSlidesProgress="true" :modules="modules"
                >
                  <swiper-slide v-for="img in carouselImg">
                    <img :src="URL_IMG + img" width="100%" />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </v-col>

          <v-col cols="12" lg="6" md="6" class="pt-0">
            <div class="quick-view-description">
              <h4 class="product-name">{{ product.productName }}</h4>
              <div class="price d-flex align-center mt-2">
                <div class="sale-price text-info">{{ filters.filterMoney(product.price) }} {{ $t('sum') }}</div>
                <!-- <div class="old-price">5 999 000</div> -->
              </div>
              <p class="mt-2">
                {{ locale === 'ru' ? product.description_ru : locale === 'en' ? product.description_en : product.description_uz }}
              </p>
              <div class="product-buttons">
                <v-btn rounded="lg" height="55" class="mr-4">
                  <v-img src="/assets/images/pay-systems/payme.svg" width="100" />
                </v-btn>
                <v-btn rounded="lg" height="55">
                  <v-img src="/assets/images/pay-systems/uzum.svg" width="100" />
                </v-btn>
              </div>
              <div class="product-info">
                <div v-for="productInfo in productInfos" class="single-info">
                  <span class="label">
                    {{ productInfo?.split(': ')[0] }}{{ productInfo?.includes(': ') ? ':' : '' }}
                  </span>
                  <span class="value">{{ productInfo?.split(': ')[1] }}</span>
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

.swiper-wrapper {
  align-items: center;
}

@media (max-width: 960px) {
  .single-product-dialog {
    .v-overlay__content {
      width: 600px !important;
    }
  }
}
</style>