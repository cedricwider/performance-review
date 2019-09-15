<template>
  <section class="finish">
    <div class="hero">
      <div class="hero-body">
        <h1 class="title is-1">Thank you!!</h1>
        <p>You may go now</p>
        <b-button type="is-primary" @click="processReport">Send</b-button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      achievements: 'getAchievements',
      strengths: 'getStrengths',
      opportunities: 'getOpportunities',
      behaviour: 'getBehaviour',
    }),

    report() {
      return {
        firstName: this.$store.state.firstName,
        lastName: this.$store.state.lastName,
        seniority: this.$store.state.seniority,
        achievements: this.achievements,
        behaviour: this.behaviour,
        strengths: this.strengths,
        opportunities: this.opportunities,
      }
    },
  },
  methods: {
    ...mapActions({ storeReport: 'storeReport' }),
    processReport() {
      console.log(`Report: ${JSON.stringify(this.report)}`)
      this.storeReport(this.report)
    },
  },
}
</script>

<style lang="scss" scoped>
p {
  font-style: italic;
}
</style>
