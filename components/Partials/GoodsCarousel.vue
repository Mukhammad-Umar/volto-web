<script lang="ts" setup>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'

const productId = ref(0)
const modules = [Navigation]
const viewDialog = reactive({ dialog: false })

const products = ref([
  {
    id: 1,
    image: '/_nuxt/assets/images/popular-goods/tv-55.jpg',
    type: 'Телевизор',
    description: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
    link: 'http://client-taqsim.crm24.uz/product/product-name-slug',
  },
  {
    id: 2,
    image: '/_nuxt/assets/images/popular-goods/tv-65.jpg',
    type: 'Телевизор',
    description: 'Televizor VOLTO LED 65VUW-9000 Smart',
    link: 'http://client-taqsim.crm24.uz/product/product-name-slug',
  },
  {
    id: 3,
    image: '/_nuxt/assets/images/popular-goods/headphone.svg',
    type: 'Ноутбуки',
    description: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
    link: 'http://client-taqsim.crm24.uz/product/product-name-slug',
  },
  {
    id: 4,
    image: '/_nuxt/assets/images/popular-goods/mouse.svg',
    type: 'Ноутбуки',
    description: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
    link: 'http://client-taqsim.crm24.uz/product/product-name-slug',
  },
  {
    id: 5,
    image: '/_nuxt/assets/images/popular-goods/pc-headphone.svg',
    type: 'Ноутбуки',
    description: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
    link: 'http://client-taqsim.crm24.uz/product/product-name-slug',
  },
  {
    id: 6,
    image: '/_nuxt/assets/images/popular-goods/watch2.svg',
    type: 'Ноутбуки',
    description: '16.1" Ноутбук Honor MagicBook Pro HLYL-WFQ9 (53011FJC)',
    link: 'http://client-taqsim.crm24.uz/product/product-name-slug',
  },
])

const viewProduct = (id: number) => {
  productId.value = id
  viewDialog.dialog = true
}
</script>

<template>
  <div class="goods-sections mb-4">
    <v-row class="w-100 justify-center steps_content mt-5 mx-2">
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
            v-for="(product, index) in products"
            :key="index"
          >
            <div class="title d-flex align-center">
              <span class="ml-3">{{ product.type }}</span>
            </div>

            <div class="good-image w-100 flex-center">
              <v-img :src="product.image" />
            </div>

            <div class="good-description mb-4">
              <!-- <p class="mb-3">{{ product.type }}</p> -->
              <h5 class="text-center">{{ product.description }}</h5>
            </div>

            <v-btn
              class="product-item-btn br-10"
              @click="viewProduct(product.id)"
            >
              Подробнее
            </v-btn>
          </swiper-slide>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </v-col>
    </v-row>

    <DialogsSingleProduct
      :productId="productId"
      :viewDialog="viewDialog"
      @emit:close="viewDialog.dialog = false"
    />
  </div>
</template>
