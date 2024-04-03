<script lang="ts" setup>
const phoneNumber = ref('')
</script>

<template>
  <footer class="footer">
    <div class="query_area">
      <v-container>
        <div class="bottom_border">
          <v-row class="align-center">
            <v-col cols="6">
              <div class="query_text">
                <h3>
                  У вас есть вопрос? <br />
                  <a href="tel: +998335773333">Позвоните</a> нам
                </h3>
                <h4>Единый сервисный центр</h4>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="query_number">
                <h3><a href="tel: +998335773333">+998 33 577 33 33</a></h3>
                <p><a href="mailto:volto.uzbekistan@mail.ru">volto.uzbekistan@mail.ru</a></p>
                <h4 class="mt-4"><a href="tel: +998993730303">+998 99 373 03 03</a></h4>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div class="footer_top">
      <v-container>
        <v-row>
          <v-col cols="12" xl="4" lg="4" md="4" sm="5">
            <div class="footer_widget footer_middle_left">
              <div class="footer_logo d-flex">
                <a href="#">
                  <v-img src="/assets/images/volto.jpg" width="100" />
                </a>
              </div>
              <div class="footer_right_bottom">
                <p>
                  Sifatli va kafolatlangan mahsulotlar <br/>
                  O'zbekistonda ishlab chiqarilgan.
                </p>
                <div class="socail_links">
                  <ul>
                    <li>
                      <a href="#" target="_blank" class="flex-center">
                        <v-icon color="white" class="ti-facebook">mdi-facebook</v-icon>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/volto.uzbekistan/?hl=en" target="_blank" class="flex-center">
                        <v-icon color="white" class="fa fa-instagram">mdi-instagram</v-icon>
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/VoltoUzbekistan" target="_blank" class="flex-center">
                        <v-img src="/assets/images/socials/tg.svg" max-width="19" class="ti-twitter-alt" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="3" class="footer_useful_links">
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
          <v-col cols="12" xl="4" lg="4" md="5" sm="7">
            <div class="footer_widget">
              <h3 class="footer_title">Связаться</h3>
              <form action="#" class="newsletter_form">
                <input v-model="phoneNumber" type="text" placeholder="Введите номер телефона">
                <button type="button">Отправить</button>
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