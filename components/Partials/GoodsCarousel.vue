<script lang="ts" setup>
import filters from "@/filters"
import { URL_IMG } from '@/defaults'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'

const productId = ref('')
const modules = [Navigation]
const api: any = useNuxtApp().$api
const viewDialog = reactive({ dialog: false })

const products: any = ref([])

async function getProducts() {
  const { data } = await api.get('api/products/getProducts')
  products.value = data
}

onMounted(() => {
  getProducts()
})
</script>

<template>
  <div class="goods-sections mb-4">
    <v-row class="w-100 justify-center steps_content position-relative mt-5 mx-2">
      <v-col cols="12" lg="11" md="11" sm="12">
        <swiper
          class="swiper goods-swiper nav_buttons w-100"
          :modules="modules"
          :slides-per-view="'auto'"
          :space-between="0"
          :grab-cursor="false"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        >
          <swiper-slide
            class="slide popular-goods pa-4 d-flex flex-nowrap flex-column justify-space-around"
            v-for="(product, index) in products" :key="index"
          >
            <!-- <div class="title d-flex align-center">
              <span class="ml-3">{{ product.type }}</span>
            </div> -->

            <div class="good-image w-100 flex-center">
              <v-img :src="URL_IMG + product.image" />
            </div>

            <div class="good-description mb-3">
              <h5 class="text-center">{{ product.productName }}</h5>
            </div>

            <div class="good-description mb-3">
              <h6 class="text-info text-center mb-3">{{ filters.filterMoney(product.price) }} {{ $t('sum') }}</h6>
            </div>

            <v-btn class="product-item-btn br-10" @click="productId = product._id; viewDialog.dialog = true;">
              {{ $t('details') }}
            </v-btn>
          </swiper-slide>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </v-col>

      <div id="news-scroll"></div>
    </v-row>

    <DialogsSingleProduct
      :productId="productId"
      :viewDialog="viewDialog"
      @emit:close="viewDialog.dialog = false"
    />
  </div>
</template>

<style lang="scss">
.goods-sections {
  padding-top: 10px;
  .steps_content {
    margin-top: 10px !important;
  }
}
</style>