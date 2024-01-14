<script lang="ts" setup></script>

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
                  <img src="/_nuxt/assets/images/volto.jpg" alt="" width="100" />
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
                      <v-img src="/_nuxt/assets/images/socials/tg.svg" max-width="19" class="ti-twitter-alt" />
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
              <h3 class="footer_title">Подписывайтесь</h3>
              <form action="#" class="newsletter_form">
                <input type="text" placeholder="Введите номер телефона">
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

<style>
/* line 1, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer {
  background-repeat: no-repeat;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background: #001d38;
}

/* line 7, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top {
  padding-top: 20px;
  padding-bottom: 20px;
}

@media (max-width: 767px) {
  /* line 7, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
  .footer .footer_top {
    padding-top: 60px;
    padding-bottom: 20px;
  }
}

@media (max-width: 767px) {
  /* line 14, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
  .footer .footer_top .footer_widget {
    margin-bottom: 20px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 14, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
  .footer .footer_top .footer_widget {
    margin-bottom: 20px;
  }
}

/* line 21, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget .footer_title {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 20px;
}

@media (max-width: 767px) {
  /* line 21, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
  .footer .footer_top .footer_widget .footer_title {
    margin-bottom: 20px;
  }
}

/* line 31, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget .footer_logo {
  font-size: 22px;
  font-weight: 400;
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 20px;
}

@media (max-width: 767px) {
  /* line 31, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
  .footer .footer_top .footer_widget .footer_logo {
    margin-bottom: 20px;
  }
}

/* line 41, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget p {
  color: #d5d5d5;
  font-size: 13px;
  font-weight: 400;
  line-height: 28px;
}

/* line 47, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget p a {
  color: #919191;
}

/* line 49, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget p a:hover {
  color: #ffe8c3;
}

/* line 55, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget p.footer_text {
  font-size: 16px;
  color: #b2b2b2;
  margin-bottom: 23px;
  font-weight: 400;
  line-height: 28px;
}

/* line 61, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget p.footer_text a.domain {
  color: #b2b2b2;
  font-weight: 400;
}

/* line 64, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget p.footer_text a.domain:hover {
  color: #ffe8c3;
  border-bottom: 1px solid #ffe8c3;
}

/* line 70, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget p.footer_text.doanar a {
  font-weight: 500;
  color: #b2b2b2;
}

/* line 74, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget p.footer_text.doanar a:hover {
  color: #ffe8c3;
  border-bottom: 1px solid #ffe8c3;
}

/* line 78, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget p.footer_text.doanar a.first {
  margin-bottom: 10px;
}

/* line 86, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget ul li {
  color: #d5d5d5;
  font-size: 13px;
  line-height: 38px;
}

/* line 90, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget ul li a {
  font-size: 14px;
  color: #d5d5d5;
  font-weight: 400;
}

/* line 93, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget ul li a:hover {
  color: #ffe8c3;
}

/* line 99, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget .newsletter_form {
  position: relative;
  margin-bottom: 20px;
}

/* line 102, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget .newsletter_form input {
  width: 100%;
  height: 50px;
  background: transparent;
  padding-left: 20px;
  font-size: 15px;
  color: #fff;
  border: none;
  border: 1px solid #334a60;
  border-radius: 30px;
  padding-right: 130px;
}

/* line 113, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget .newsletter_form input::placeholder {
  font-size: 15px;
  color: #919191;
}

/* line 117, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget .newsletter_form input:focus {
  outline: none;
}

/* line 121, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget .newsletter_form button {
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
  border: none;
  font-size: 14px;
  color: #001d38;
  background: #ffe8c3;
  padding: 10px;
  padding: 0 22px;
  cursor: pointer;
  border-radius: 30px;
  top: 5px;
  right: 5px;
  font-size: 14px;
  font-weight: 500;
}

/* line 140, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .footer_top .footer_widget .newsletter_text {
  font-size: 13px;
  color: #d5d5d5;
  line-height: 24px;
}

/* line 147, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .copy-right_text {
  padding-bottom: 20px;
}

/* line 149, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .copy-right_text .footer_border {
  border-top: 1px solid #e8e8e8;
  padding-bottom: 20px;
}

/* line 153, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .copy-right_text .copy_right {
  font-size: 14px;
  color: #919191;
  margin-bottom: 0;
  font-weight: 400;
}

@media (max-width: 767px) {
  /* line 153, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
  .footer .copy-right_text .copy_right {
    font-size: 13px;
  }
}

/* line 161, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .copy-right_text .copy_right a {
  color: #ffe8c3;
}

/* line 166, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .socail_links {
  margin-top: 47px;
}

@media (max-width: 767px) {
  /* line 166, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
  .footer .socail_links {
    margin-top: 20px;
  }
}

/* line 172, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .socail_links ul li {
  display: inline-block;
}

/* line 175, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .socail_links ul li a {
  font-size: 15px;
  color: #c3b2f0;
  width: 40px;
  height: 40px;
  display: inline-block;
  text-align: center;
  background: transparent;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  line-height: 40px !important;
  margin-right: 7px;
  color: #ffffff;
  line-height: 40px !important;
  border: 1px solid #e8e8e8;
  color: #e8e8e8;
}

/* line 190, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .socail_links ul li a:hover {
  color: #fff !important;
  background: #ffe8c3;
  border-color: transparent;
}

/* line 200, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .query_area .bottom_border {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #334a60;
}

/* line 205, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .query_area .query_text {
  margin-bottom: 20px;
}

/* line 207, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .query_area .query_text h3 {
  font-size: 30px;
  color: #fff;
  font-weight: 500;
  line-height: 52px;
  margin-bottom: 0;
}

@media (max-width: 767px) {
  /* line 207, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
  .footer .query_area .query_text h3 {
    font-size: 20px;
    line-height: 32px;
  }
}

@media (max-width: 767px) {
  /* line 217, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
  .footer .query_area .query_text h3 br {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 217, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
  .footer .query_area .query_text h3 br {
    display: none;
  }
}

/* line 225, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .query_area .query_text h3 a {
  color: #ffd35a;
}

/* line 227, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .query_area .query_text h3 a:hover {
  text-decoration: underline;
}

/* line 233, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .query_area .query_number {
  text-align: right;
  margin-bottom: 20px;
}

@media (max-width: 767px) {
  /* line 233, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
  .footer .query_area .query_number {
    text-align: left;
  }
}

/* line 239, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .query_area .query_number h3 {
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 8px;
}

/* line 246, ../../Arafath/CL/Cl November/224. Interior Design/HTML/scss/_footer.scss */
.footer .query_area .query_number p a {
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
}
</style>
