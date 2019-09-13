<template>
  <li>
    <div class="level outline">
      <div class="level-left">
        <p>
          <slot></slot>
        </p>
      </div>
      <div class="level-right">
        <a @click="onClick">
          <b-icon icon="delete"></b-icon>
        </a>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('delete')
    },
  },
}
</script>

<style lang="scss" scoped>
// TODO: Style colors (outline and li:hover)
li {
  margin-bottom: 0.5rem;
}
.outline {
  padding: 1.5rem;
  border-radius: 5px;
  border: 1px black solid;
}
</style>
