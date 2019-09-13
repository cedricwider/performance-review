<template>
  <section class="work-achievements">
    <div class="hero">
      <div class="hero-body">
        <div class="main-content">
          <DynaList :title="sectionTitle" v-model="workAchievements">
            <p>What have you been working on in the past couple of months?</p>
            <p>What do you think is worth pointing out?</p>
            <p>Looking back, what do you think were the highlights?</p>
          </DynaList>
        </div>
        <PrevNextButtonBar
          prev="/reviews/name"
          next="/reviews/behaviour"
          :disabled="workAchievements.length === 0"
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
      sectionTitle: 'Work Achievements',
      workAchievements: [],
    }
  },
}
</script>

<style lang="scss" scoped></style>
