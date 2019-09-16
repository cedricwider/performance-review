<template>
  <section class="behaviour">
    <div class="hero">
      <div class="hero-body">
        <EvaluationGrid title="Behaviour" :complete="complete">
          <p>
            Go through the different areas in the following list. In which area do you think you fulfilled your role?
          </p>
          <p>In what areas you think you can still improve?</p>
          <p>Are there areas where you think you excelled in?</p>
        </EvaluationGrid>
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
