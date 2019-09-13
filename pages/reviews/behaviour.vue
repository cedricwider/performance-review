<template>
  <section class="behaviour">
    <div class="hero">
      <div class="hero-body">
        <EvaluationGrid title="Behaviour" :complete="complete"> </EvaluationGrid>
        <PrevNextButtonBar prev="/reviews/work" next="/reviews/strengths"></PrevNextButtonBar>
      </div>
    </div>
  </section>
</template>

<script>
import EvaluationGrid from '../../components/EvaluationGrid'
import PrevNextButtonBar from '../../components/PrevNextButtonBar'
export default {
  components: {
    EvaluationGrid,
    PrevNextButtonBar,
  },
  data() {
    return {
      complete: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
