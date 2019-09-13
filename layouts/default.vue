<template>
  <div class="application">
    <Navigation></Navigation>
    <section class="main-content">
      <div class="container">
        <div class="nuxt-content">
          <nuxt />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  components: {
    Navigation,
  },
}
</script>

<style lang="scss">
@import 'assets/colors.scss';
@import 'assets/fonts.scss';

// ...update Bulma variables
$family-primary: $normal-font;
$family-secondary: $highlight-font;
$family-sans-serif: $normal-font;
$primary: $rosy-brown;
$white: $almost-white;
$black: $almost-black;
$link: $dim-gray;

.application {
  min-height: 100%;
  background-color: $baby-blue;
}

.nuxt-content {
  margin-top: calc(50vh - 22rem);
  background: white;
  -webkit-box-shadow: 11px 12px 8px 0px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 11px 12px 8px 0px rgba(0, 0, 0, 0.33);
  box-shadow: 11px 12px 8px 0px rgba(0, 0, 0, 0.33);
}
</style>
