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
export default {
  components: {
    DynaList,
    PrevNextButtonBar,
  },
  data() {
    return {
      sectionTitle: 'Strengths',
      strengths: [],
    }
  },
}
</script>

<style lang="scss" scoped></style>
