<script lang="ts" setup>
const phoneNumber = ref('')
</script>

<template>
  <footer class="footer">
    <div class="query_area">
      <v-container>
        <div class="bottom_border">
          <v-row class="align-center">
            <v-col cols="12" lg="6" md="6">
              <div class="query_text">
                <h3>
                  У вас есть вопрос? <br />
                  <a href="#">Позвоните</a> нам
                </h3>
              </div>
            </v-col>
            <v-col cols="12" lg="6" md="6">
              <div class="query_number">
                <h3>+998 99 999 88 88</h3>
                <p><a href="#">support@gmail.com</a></p>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div class="footer_top">
      <v-container>
        <v-row>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="footer_widget">
              <div class="footer_logo">
                <a href="#">
                  <v-img :src="'/_nuxt/assets/images/volto.jpg'" width="100" />
                </a>
              </div>
              <p>
                Sifatli va kafolatlangan mahsulotlar <br/>
                O'zbekistonda ishlab chiqarilgan.
              </p>
              <div class="socail_links">
                <ul>
                  <li>
                    <a href="#" class="flex-center">
                      <v-icon color="white" class="ti-facebook">mdi-facebook</v-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex-center">
                      <v-icon color="white" class="fa fa-instagram">mdi-instagram</v-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex-center">
                      <v-img :src="'/_nuxt/assets/images/socials/tg.svg'" max-width="19" class="ti-twitter-alt" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="footer_widget">
              <h3 class="footer_title">Полезные ссылки</h3>
              <ul>
                <li> <a href="#">{{ $t('catalog') }}</a> </li>
                <li> <a href="#">{{ $t('news') }}</a> </li>
                <li> <a href="#">{{ $t('contacts') }}</a> </li>
                <li> <a href="#">{{ $t('about') }}</a> </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="footer_widget">
              <h3 class="footer_title">Связаться</h3>
              <form action="#" class="newsletter_form">
                <input v-model="phoneNumber" type="text" placeholder="Введите номер телефона">
                <button type="submit">Отправить</button>
              </form>
              <p class="newsletter_text">Отправьте нам свой номер телефона и наш оператор позвонит вам</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="copy-right_text">
      <v-container>
        <v-row>
          <v-col cols="12" xl="12">
            <p class="copy_right text-center">
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy;
              {{ new Date().getFullYear() }}
              All rights reserved | Volto
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </footer>
</template>

<style lang="scss">
.asd {
  font-size: 12px;
}
</style>