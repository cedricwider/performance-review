<template>
  <div class="hero has-background-grey-lighter rounded-corners">
    <div class="hero-body flex-column">
      <strong>Such emptyness here</strong>
      <b-icon icon="android" size="is-large" pack="mdi"></b-icon>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
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
</style>
