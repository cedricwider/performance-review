<template>
  <section class="opportunities">
    <div class="hero">
      <div class="hero-body">
        <div class="main-content">
          <DynaList :title="sectionTitle" v-model="opportunities">
            <p>Where do you feel not so comfortable but know that it would benefit your work?</p>
            <p>In which areas are you slower or less assertive than you wish?</p>
            <p>What are the opportunities you see to further develop your career?</p>
          </DynaList>
        </div>
        <PrevNextButtonBar
          prev="/reviews/strengths"
          next="/reviews/finish"
          nextLabel="Finish"
          :disabled="opportunities.length === 0"
        ></PrevNextButtonBar>
      </div>
    </div>
  </section>
</template>

<script>
import DynaList from '../../components/DynaList'
import PrevNextButtonBar from '../../components/PrevNextButtonBar'
import { mapGetters } from 'vuex'

export default {
  components: {
    DynaList,
    PrevNextButtonBar,
  },
  computed: {
    ...mapGetters({ storedOpportunities: 'getOpportunities' }),
    opportunities: {
      get() {
        return this.storedOpportunities || []
      },
      set(value) {
        this.$store.commit('setOpportunities', value)
      },
    },
  },
  data() {
    return {
      sectionTitle: 'Opportunities',
    }
  },
}
</script>

<style lang="scss" scoped></style>
