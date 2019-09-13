<template>
  <section class="name-form">
    <div class="hero">
      <div class="hero-body">
        <h2 class="title is-2">Personal Data</h2>
        <form @submit.prevent="onSubmit">
          <div class="columns">
            <div class="column">
              <b-field label="First Name">
                <b-input type="text" size="is-large" v-model="firstName"></b-input>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Last Name">
                <b-input type="text" size="is-large" v-model="lastName"></b-input>
              </b-field>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <b-field label="Seniority">
                <b-select size="is-large" expanded v-model="seniority">
                  <option v-for="(role, index) in roles" :key="index" :value="role.value">{{ role.label }}</option>
                </b-select>
              </b-field>
            </div>
          </div>
        </form>
        <PrevNextButtonBar prev="/reviews" next="/reviews/work" :disabled="!formComplete"></PrevNextButtonBar>
      </div>
    </div>
  </section>
</template>

<script>
import PrevNextButtonBar from '../../components/PrevNextButtonBar'
import { MapMutations } from 'vuex'

export default {
  components: {
    PrevNextButtonBar,
  },
  computed: {
    formComplete() {
      return this.firstName && this.lastName && this.seniority
    },
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      seniority: null,
      roles: [
        {
          label: 'Junior Software Engineer',
          value: 'junior',
        },
        {
          label: 'Professional Software Engineer',
          value: 'professional',
        },
        {
          label: 'Senior Software Engineer',
          value: 'senior',
        },
      ],
    }
  },
  methods: {
    save() {
      console.log('Saving name state')
      this.$store.commit('setFirstName', this.firstName)
      this.$store.commit('setLastName', this.lastName)
      this.$store.commit('setSeniority', this.seniority)
    },
  },

  beforeRouteLeave(to, from, next) {
    console.log('befoureRouteLeave')
    this.save()
    next()
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.firstName = vm.$store.state.firstName
      vm.lastName = vm.$store.state.lastName
      vm.seniority = vm.$store.state.seniority
    })
  },
}
</script>

<style lang="scss" scoped></style>
