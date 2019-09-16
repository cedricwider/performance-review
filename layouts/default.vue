<template>
  <div class="application background-image is-centered">
    <section class="main-content">
      <div class="container">
        <div class="nuxt-content">
          <nuxt />
        </div>
      </div>
    </section>
  </div>
</template>

<script></script>

<style lang="scss">
@import 'assets/colors.scss';
@import 'assets/fonts.scss';

.application {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-image {
  background-image: url('../assets/background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.main-content {
  width: 100%;
}

.nuxt-content {
  background: $yellow-light-2;
  -webkit-box-shadow: 11px 12px 8px 0px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 11px 12px 8px 0px rgba(0, 0, 0, 0.33);
  box-shadow: 11px 12px 8px 0px rgba(0, 0, 0, 0.33);
}
</style>
