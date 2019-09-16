<template>
  <div class="hero rounded-corners">
    <div class="hero-body soft-border rounded-corners flex-column">
      <strong>Such emptyness here</strong>
      <b-icon icon="android" size="is-large" pack="mdi"></b-icon>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  > * {
    margin-bottom: 0.5rem;
  }
}

.rounded-corners {
  border-radius: 5px;
}

.soft-border {
  border: 1px $coral-tree solid;
}
</style>
