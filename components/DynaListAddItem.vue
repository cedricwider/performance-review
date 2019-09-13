<template>
  <form @submit.prevent="onSubmit">
    <div class="input-form">
      <b-field class="space-greedy">
        <b-input type="text" v-model="item" size="is-large"></b-input>
      </b-field>
      <b-button id="add-button" class="space-ascetic" size="is-large" type="is-primary" @click="onSubmit">Add</b-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      item: null,
    }
  },
  methods: {
    onSubmit() {
      this.$emit('update', this.item)
      this.item = null
    },
  },
}
</script>

<style lang="scss" scoped>
.input-form {
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  .space-greedy {
    flex: 7;
  }
  .space-ascetic {
    flex: 1;
  }
}

#add-button {
  margin-left: 0.5rem;
}
</style>
