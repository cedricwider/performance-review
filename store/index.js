export const state = () => ({
  performanceReview: {
    firstName: null,
    lastName: null,
    seniority: null,
    achievements: [],
    strengths: [],
    opportunities: [],
    behaviour: {},
  },
})

export const mutations = {
  setFirstName(state, firstName) {
    state.firstName = firstName
  },
  setLastName(state, lastName) {
    state.lastName = lastName
  },
  setSeniority(state, seniority) {
    state.seniority = seniority
  },
  addAchievement(state, achievement) {
    state.achievements.push(achievement)
  },
  addStrength(state, strength) {
    state.strengths.push(strength)
  },
  addOpportunity(state, opportunity) {
    state.opportunities.push(opportunity)
  },
  removeAchievement(state, achievement) {
    const index = state.achievements.indexOf(achievement)
    if (index === -1) return

    state.achievements.splice(index, 1)
  },
  removeStrength(state, strength) {
    const index = state.strengths.indexOf(strength)
    if (index === -1) return

    state.strengths.splice(index, 1)
  },
  removeOpportunity(state, opportunity) {
    const index = state.opportunities.indexOf(opportunity)
    if (index === -1) return

    state.opportunities.splice(index, 1)
  },
}
