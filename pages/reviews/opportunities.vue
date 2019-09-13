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
export default {
  components: {
    DynaList,
    PrevNextButtonBar,
  },
  data() {
    return {
      sectionTitle: 'Opportunities',
      opportunities: [],
    }
  },
}
</script>

<style lang="scss" scoped></style>
