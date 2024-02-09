<script setup>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Navigation]
const url = window?.location.origin

const news = ref([
  {
    id: 1,
    image: '/images/news/news1.svg',
    title: 'Заголовок новости!',
    description: 'Задача организации, в особенности же рамки и место обучения кадров играет важную роль в формировании направлений прогрессивного развития. Товарищи! сложившаяся структура...',
    date: '29 август 2023',
  },
  {
    id: 2,
    image: '/images/news/news2.svg',
    title: 'Заголовок новости!',
    description: 'Задача организации, в особенности же рамки и место обучения кадров играет важную роль в формировании направлений прогрессивного развития. Товарищи! сложившаяся структура...',
    date: '24 август 2023',
  },
  {
    id: 3,
    image: '/images/news/news3.svg',
    title: 'Заголовок новости!',
    description: 'Задача организации, в особенности же рамки и место обучения кадров играет важную роль в формировании направлений прогрессивного развития. Товарищи! сложившаяся структура...',
    date: '10 август 2023',
  },
  {
    id: 4,
    image: '/images/news/news3.svg',
    title: 'Заголовок новости!',
    description: 'Задача организации, в особенности же рамки и место обучения кадров играет важную роль в формировании направлений прогрессивного развития. Товарищи! сложившаяся структура...',
    date: '10 август 2023',
  },
])

const threeDots = (text) => {
  if (text.length > 170) return text.substring(0, 170) + '... '
  else return text
}
</script>

<template>
  <v-row class="content-sections justify-center bg-white mb-4 mx-2">
    <v-col cols="12" lg="11" md="11" sm="12">
      <h3 class="content_info">
        Новости
      </h3>

      <div class="d-flex flex-nowrap justify-center mt-5">
        <swiper
          class="swiper justify-center news-content nav_buttons position-relative"
          :style="{ height: news.length > 3 ? '530px' : '' }"
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
            v-for="(oneNews, index) in news" :key="index"
            class="pa-5 news-content-item d-flex flex-nowrap flex-column justify-space-between br-10"
          >
            <div class="d-flex flex-column align-center">
              <v-img :src="url + oneNews.image" width="352px" height="210px" />
              <h5>{{ oneNews.title }}</h5>
              <p>
                {{ threeDots(oneNews.description) }}
              </p>
            </div>

            <div class="news-content_bottom w-100 d-flex justify-space-between">
              <span class="d-flex align-center">{{ oneNews.date }}</span>
              <v-btn icon density="compact" variant="text" :to="'/news/' + oneNews.id">
                <v-icon size="20" color="info">mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </swiper-slide>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.news-content-item {
  border: 1px solid var(--white-mute);
  width: 400px !important;
  height: 484px !important;

  h5 {
    font-size: 24px;
    color: var(--text-color);
    margin: 20px 0 14px 0;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: var(--inactive-color);
  }
}

.news-content-item:not(:last-child) {
  margin-right: 20px;
}

.news-content_bottom span {
  color: var(--inactive-color);
}
</style>
