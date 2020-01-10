<template>
  <div class="evaluation-grid">
    <div class="header-section">
      <h2 class="title is-2">{{ title }}</h2>
      <slot></slot>
    </div>
    <div class="legend is-pulled-right">
      <legend>
        <small>
          <p>1: Strive to improve, 2: fulfilled, 3: More than expected</p>
        </small>
      </legend>
    </div>
    <div class="main-content">
      <EvaluationGridRow
        v-for="facet in facets"
        :key="facet.id"
        :title="facet.title"
        :identifier="facet.id"
        :description="facet.description"
        :value="facet.value"
        @change="onChange"
        class="grid-row"
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
  computed: {
    role() {
      const seniority = this.$store.seniority || 'professional'
      console.log(`Seniority: ${seniority}`)
      console.log(`Roles: ${this.$store.state.roles.roles}`)
      return this.$store.state.roles.roles[seniority]
    },
    facets() {
      return [
        {
          id: 'communication',
          value: this.$store.state.behaviour.communication || 2,
          title: 'Stakeholder Communication',
          description: this.role.communication.join('. '),
        },
        {
          id: 'execution',
          value: this.$store.state.behaviour.execution || 2,
          title: 'Project Execution',
          description: this.role.execution.join('. '),
        },
        {
          id: 'implementation',
          value: this.$store.state.behaviour.implementation || 2,
          title: 'Technical Implementation',
          description: this.role.implementation.join('. '),
        },
        {
          id: 'teamwork',
          value: this.$store.state.behaviour.teamwork || 2,
          title: 'Teamwork',
          description: this.role.teamwork.join('. '),
        },
        {
          id: 'innovation',
          value: this.$store.state.behaviour.innovation || 2,
          title: 'Innovation',
          description: this.role.innovation.join('. '),
        },
      ]
    },
  },
  data() {
    return {}
  },
  methods: {
    onChange(facetId, facetValue) {
      let facet = this.facets.find(facet => facet.id === facetId)
      facet.value = parseInt(facetValue)
      let updateBehaviour = {}
      this.facets.forEach(facet => (updateBehaviour[facet.id] = facet.value))
      this.$store.commit('setBehaviour', updateBehaviour)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/colors.scss';

.main-content {
  margin-top: 1.5rem;
}
.grid-row {
  margin-top: 2rem;
}
legend {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-style: italic;
  color: $coral-tree;
}
</style>
