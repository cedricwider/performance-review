<template>
  <div class="evaluation-grid-row">
    <h3 class="title is-3">{{ title }}</h3>
    <div class="columns">
      <div class="description column is-four-fifths">{{ description }}</div>
      <div class="column">
        <b-field>
          <b-input type="number" min="1" max="3" v-model="value" size="is-large"></b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
