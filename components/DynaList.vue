<template>
  <section class="section dyna-list">
    <h2 class="title is-2">{{ title }}</h2>
    <slot>
      <p>{{ description }}</p>
    </slot>
    <div class="main-content">
      <DynaListAddItem @update="addItem"></DynaListAddItem>
      <DynaListEmpty v-if="items.length === 0"></DynaListEmpty>
      <ul>
        <DynaListItem v-for="(item, index) in reverseItems" :key="index" @delete="items.splice(index, 1)">{{
          item
        }}</DynaListItem>
      </ul>
    </div>
  </section>
</template>

<script>
import DynaListItem from './DynaListItem'
import DynaListEmpty from './DynaListEmpty'
import DynaListAddItem from './DynaListAddItem'
export default {
  props: {
    items: {
      type: Array,
      required: false,
      default: [],
    },
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  components: {
    DynaListItem,
    DynaListEmpty,
    DynaListAddItem,
  },
  model: {
    // https://dev.to/vue-storefront/vue-during-coffee-break-using-v-model-with-custom-components-3bo9
    prop: 'items',
    event: 'changed',
  },
  computed: {
    reverseItems() {
      return this.items.reverse()
    },
  },
  methods: {
    addItem(item) {
      this.items.push(item)
    },
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  margin-top: 1.5rem;
}
</style>
