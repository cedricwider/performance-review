<template>
  <li>
    <div class="level outline">
      <div class="level-left max-width">
        <p class="content">
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
@import '~/assets/colors.scss';
li {
  margin-bottom: 0.5rem;
}
.content {
  max-width: 100%;
  text-overflow: ellipsis;
}
.max-width {
  max-width: 100%;
}
.outline {
  padding: 1.5rem;
  border-radius: 5px;
  border: 1px $coral-tree solid;
}
</style>
