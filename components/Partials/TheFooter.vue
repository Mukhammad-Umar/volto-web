<script lang="ts" setup></script>

<template>
  <footer class="d-flex justify-center">
    <div class="container d-flex justify-space-between w-100 py-6 px-10">
      <div class="footer-left d-flex">
        <div class="footer_logo">
          <img src="/_nuxt/assets/images/logo.png" class="mr-3" />
          <h6 class="text-bold">Volto</h6>
        </div>

        <div class="footer-links d-flex">
          <a href="#">Политика конфеденциальности</a>
          <a href="#">Пользовательское соглашение</a>
        </div>
      </div>

      <div class="footer-apps d-flex float-right">
        <div class="google-play app-market mr-4 cup">
          <v-img
            max-width="16" class="mr-3"
            src="/assets/images/socials/google-play.svg"
          />
          <span>Google Play</span>
        </div>

        <div class="app-store app-market cup mr-5">
          <v-img
            max-width="16" class="mr-3"
            src="/assets/images/socials/app-store.svg"
          />
          <span>App Store</span>
        </div>

        <div class="messenger cup">
          <v-icon color="white">mdi-facebook</v-icon>
        </div>

        <div class="messenger cup">
          <v-icon color="white">mdi-instagram</v-icon>
        </div>

        <div class="messenger cup">
          <v-img src="/assets/images/socials/tg.svg" max-width="21" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  background: var(--bg-black);
}

.footer_logo {
  display: flex;
  align-items: center;
  color: var(--text-white);
  margin-right: 60px;
}

.footer_logo img {
  width: 30px;
}

.footer_logo h6 {
  font-weight: 500;
  font-size: 21px;
}

.footer-links a {
  max-width: 150px;
  display: block;
  color: var(--dark-text);
}

.footer-links a:not(:last-child) {
  margin-right: 35px;
}

.messenger {
  border: 1px solid var(--dark-border);
  border-radius: 10px;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.messenger:not(:last-child) {
  margin-right: 14px;
}
</style>
