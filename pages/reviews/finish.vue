<template>
  <section class="finish">
    <div class="hero">
      <div class="hero-body">
        <Summary v-if="displaySummary" :report="report" />
        <section class="button-bar" v-if="displaySummary">
          <hr />
          <div class="columns">
            <div class="column">
              <nuxt-link class="button is-secondary is-large" to="opportunities">Back</nuxt-link>
            </div>
            <div class="column">
              <b-button type="primary" class="button is-primary is-large is-pulled-right" @click="processReport"
                >Submit</b-button
              >
            </div>
          </div>
        </section>
        <section v-if="displaySpinner">
          <b-progress size="is-large" show-value class="is-black">
            Transmitting Report
          </b-progress>
        </section>
        <section v-if="displaySuccess">
          <h2 class="title is-2">Success!!</h2>
          <p>...you may go now!</p>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import Summary from '~/components/Summary'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Summary,
  },
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
  data() {
    return {
      displaySummary: true,
      displaySpinner: false,
      displaySuccess: false,
    }
  },
  methods: {
    ...mapActions({ storeReport: 'storeReport' }),
    processReport() {
      this.showSpinner()
      this.storeReport(this.report)
        .then(() => {
          this.showSuccessNotification()
          this.showSuccess()
        })
        .catch(() => {
          this.showErrorNotification()
          this.showSummary()
        })
    },
    showSuccessNotification() {
      this.$buefy.notification.open({
        message: 'Performance Review submitted successfully!',
        type: 'is-success',
        hasIcon: true,
      })
    },
    showErrorNotification() {
      this.$buefy.notification.open({
        message: 'Oops! Something went wrong',
        type: 'is-danger',
        hassIcon: true,
      })
    },
    showSummary() {
      this.displaySummary = true
      this.displaySpinner = false
      this.displaySuccess = false
    },
    showSpinner() {
      this.displaySummary = false
      this.displaySpinner = true
      this.displaySuccess = false
    },
    showSuccess() {
      this.displaySummary = false
      this.displaySpinner = false
      this.displaySuccess = true
    },
  },
}
</script>

<style lang="scss" scoped>
p {
  font-style: italic;
}
</style>
