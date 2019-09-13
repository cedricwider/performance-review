<template>
  <section class="name-form">
    <div class="container">
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
                <option v-for="(role, index) in roles" :key="index" value="role.value">{{ role.label }}</option>
              </b-select>
            </b-field>
          </div>
        </div>
      </form>
      <PrevNextButtonBar prev="/reviews" next="/reviews/work" :disabled="!formComplete"></PrevNextButtonBar>
    </div>
  </section>
</template>

<script>
import PrevNextButtonBar from '../../components/PrevNextButtonBar'
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
}
</script>

<style lang="scss" scoped></style>
