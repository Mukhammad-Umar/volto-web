<script lang="ts" setup>

</script>

<template>
  <v-container>
    <v-row class="mt-0 mb-3 d-flex justify-center">
      <v-col cols="12" xl="8" lg="9">
        <div class="news-details-wrapper">
          <v-img src="/assets/images/news/news2.svg" class="mx-auto" />
          <div class="news-info">
            <v-btn class="text-none text-grey" variant="text" rounded="lg" border @click="$router.back()">
              <v-icon color="grey" class="mr-1">mdi-arrow-u-left-top</v-icon>
              {{ $t('back') }}
            </v-btn>
            <div class="news-date">
              <v-icon color="grey">mdi-calendar-month-outline</v-icon>
              <span class="text-grey">24 август 2023</span>
            </div>
          </div>
          <h3 class="news-title">
            Unique products that will impress your home
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            laborum minima totam sed sit consectetur dicta autem? Vel, amet
            veritatis in iste repellendus ipsa voluptas iure eius distinctio
            fugit perferendis voluptatibus consectetur adipisci dolores porro.
            Quas beatae dolorem nihil? Voluptas mollitia voluptates esse maiores
            ad aspernatur minima vitae quae voluptate eos excepturi hic
            laboriosam iusto labore quisquam quas ullam illum, corrupti, ipsum
            inventore dignissimos reprehenderit ducimus dicta distinctio?
            Maiores amet exercitationem explicabo. Excepturi, laboriosam
            molestias sed minus ullam, distinctio qui doloribus, necessitatibus
            ducimus consectetur amet illum pariatur impedit molestiae veniam.
            Fugiat corrupti excepturi odio sint consectetur architecto, sit
            suscipit velit non eligendi ab dolore blanditiis facilis earum vero
            placeat natus deleniti esse facere quaerat mollitia. Dolorum ad
            dolore impedit sed?
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.news-details-wrapper {
  margin-top: 20px;

  .news-info {
    display: flex;
    margin-top: 25px;
    align-items: center;
    justify-content: space-between;

    .news-date {
      display: flex;
      i {
        font-size: 18px;
        color: #000;
        margin-top: 2px;
        margin-right: 8px;
      }
      span {
        font-size: 15px;
        font-weight: 500;
        font-family: 'Rajdhani', sans-serif;
      }
    }
  }

  .news-title {
    margin-bottom: 0;
    margin-top: 20px;
    display: inline-block;
    color: #383838;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.4;
  }

  p {
    margin-top: 15px;
    font-size: 15px;
    line-height: 1.8;
  }
}
</style>
