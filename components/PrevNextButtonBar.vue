<template>
  <section class="button-bar">
    <hr />
    <div class="columns">
      <div class="column">
        <nuxt-link class="button is-secondary is-large" :to="prev">{{ prevLabel }}</nuxt-link>
      </div>
      <div class="column">
        <nuxt-link
          :to="next"
          class="button is-large is-primary is-pulled-right"
          :disabled="disabled"
          :event="disabled ? '' : 'click'"
          >{{ nextLabel }}</nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    prev: {
      type: String,
      required: true,
    },
    prevLabel: {
      type: String,
      required: false,
      default: 'Back',
    },
    next: {
      type: String,
      required: true,
    },
    nextLabel: {
      type: String,
      required: false,
      default: 'Next',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.button-bar {
  margin-top: 1.5rem;
}
</style>
