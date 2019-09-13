<template>
  <div class="evaluation-grid">
    <div class="header-section">
      <h2 class="title is-2">{{ title }}</h2>
      <slot></slot>
    </div>
    <div class="main-content">
      <EvaluationGridRow
        v-for="facet in facets"
        :key="facet.id"
        :title="facet.title"
        :description="facet.description"
        :value="facet.value"
      ></EvaluationGridRow>
    </div>
  </div>
</template>

<script>
import EvaluationGridRow from './EvaluationGridRow'
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    complete: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  components: {
    EvaluationGridRow,
  },
  data() {
    return {
      facets: [
        {
          id: 'communication',
          value: 2,
          title: 'Stakeholder Communication',
          description:
            "Proactive, Continuous Feedback Loop. Ask Questions. Understand stakeholder's point of view. Fight for Simplicity",
        },
        {
          id: 'execution',
          value: 2,
          title: 'Project Execution',
          description:
            'Structured and efficient. Visible and planned with work broken down into tasks. Facilitate decision making. Take responsibility for the team.',
        },
        {
          id: 'implementation',
          value: 2,
          title: 'Technical Implementation',
          description:
            'Follow best practices. Take responsibility for the solution. Write tests. Release Management. Develop solutions that meet the requirements. Demand design sessions.',
        },
        {
          id: 'teamwork',
          value: 2,
          title: 'Teamwork',
          description:
            'Open dialogue. Share knowledge. Value diverse personalities. Drive team values and coach others.',
        },
        {
          id: 'innovation',
          value: 2,
          title: 'Innovation',
          description: 'Challenge and improve tools, workflows and processes.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  margin-top: 1.5rem;
}
</style>
