<template>
  <section class="summary">
    <h2 class="title is-2">Summary</h2>
    <p>Please review your performance review before you submit.</p>
    <section id="achievements" class="subsection">
      <h3 class="title is-3">Work Achievements</h3>
      <ul class="item-list">
        <li v-for="(achievement, index) in report.achievements" :key="index" class="list-item">{{ achievement }}</li>
      </ul>
    </section>

    <section id="behaviour" class="subsection">
      <h3 class="title is-3">Behaviour</h3>
      <table class="table is-bordered full-width">
        <tbody>
          <tr>
            <td>Communication</td>
            <td>{{ report.behaviour.communication }}</td>
          </tr>
          <tr>
            <td>Execution</td>
            <td>{{ report.behaviour.execution }}</td>
          </tr>
          <tr>
            <td>Implementation</td>
            <td>{{ report.behaviour.implementation }}</td>
          </tr>
          <tr>
            <td>Innovation</td>
            <td>{{ report.behaviour.innovation }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section id="strengths" class="subsection">
      <h3 class="title is-3">Strengths</h3>
      <ul class="item-list">
        <li v-for="(strength, index) in report.strengths" :key="index" class="list-item">{{ strength }}</li>
      </ul>
    </section>
    <section id="opportunities" class="subsection">
      <h3 class="title is-3">Opportunities</h3>
      <ul class="item-list">
        <li v-for="(opportunity, index) in report.opportunities" :key="index" class="list-item">{{ opportunity }}</li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    report: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.full-width {
  width: 100%;
}
.subsection {
  margin-top: 2.5rem;
}
</style>
