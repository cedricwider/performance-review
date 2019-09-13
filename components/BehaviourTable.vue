<template>
  <div class="table-form">
    <div class="table-form-cell table-form-header is-primary">Topic</div>
    <div class="table-form-cell table-form-header">Description</div>
    <div class="table-form-cell table-form-header">Verdict</div>

    <template v-for="(row, rowIndex) in rows">
      <div v-for="(text, index) in row" :key="index">{{ text }}</div>
      <b-field>
        <b-input type="number" min="1" max="3"></b-input>
      </b-field>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        [
          'Stakeholder Communication',
          "Proactive, Continuous Feedback Loop. Ask Questions. Understand stakeholder's point of view. Fight for Simplicity",
        ],
        [
          'Project Execution',
          'Structured and efficient. Visible and planned with work broken down into tasks. Facilitate decision making. Take responsibility for the team.',
        ],
        [
          'Technical Implementation',
          'Follow best practices. Take responsibility for the solution. Write tests. Release Management. Develop solutions that meet the requirements. Demand design sessions.',
        ],
        [
          'Teamwork',
          'Open dialogue. Share knowledge. Value diverse personalities. Drive team values and coach others.',
        ],
        ['Innovation', 'Challenge and improve tools, workflows and processes.'],
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.table-form {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 0.5rem;
}
</style>
