<template>
  <section class="strengths">
    <div class="hero">
      <div class="hero-body">
        <div class="main-content">
          <DynaList :title="sectionTitle" v-model="strengths">
            <p>What are the areas in which you excel?</p>
            <p>What do you feel most comfortable doing?</p>
            <p>Where do you get the most positive feedback?</p>
          </DynaList>
        </div>
        <PrevNextButtonBar
          prev="/reviews/behaviour"
          next="/reviews/opportunities"
          :disabled="strengths.length === 0"
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
    ...mapGetters({ storedStrengths: 'getStrengths' }),
    strengths: {
      get() {
        return this.storedStrengths || []
      },
      set(value) {
        this.$store.commit('setStrengths', value)
      },
    },
  },
  data() {
    return {
      sectionTitle: 'Strengths',
    }
  },
}
</script>

<style lang="scss" scoped></style>
