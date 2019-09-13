<template>
  <b-navbar class="main-navigation">
    <template slot="start">
      <h4 class="title is-4">{{ name ? name + "'s" : '' }} Performance Review</h4>
    </template>

    <template slot="end">
      <h4 class="title is-4">{{ title }}</h4>
    </template>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    name() {
      const firstName = this.$store.state.firstName
      const lastName = this.$store.state.lastName
      if (!firstName && !lastName) return null

      return [firstName, lastName].join(' ')
    },
    title() {
      return this.titles[this.$store.state.seniority]
    },
  },
  data() {
    return {
      titles: {
        junior: 'Junior Software Engineer',
        professional: 'Software Engineer',
        senior: 'Senior Software Engineer',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/colors.scss';

.main-navigation {
  background: $almost-white;
  -webkit-box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.33);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.33);
}

.title {
  margin-top: 1rem;
}
</style>
