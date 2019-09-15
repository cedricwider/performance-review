import axios from 'axios';

export const state = () => ({
  firstName: null,
  lastName: null,
  seniority: null,
  achievements: [],
  strengths: [],
  opportunities: [],
  behaviour: {
    communication: 2,
    execution: 2,
    implementation: 2,
    teamwork: 2,
    innovation: 2,
  },
});

export const getters = {
  getAchievements: state => state.achievements.slice(),
  getStrengths: state => state.strengths.slice(),
  getOpportunities: state => state.opportunities.slice(),
  getBehaviour: state => Object.assign({}, state.behaviour),
};

export const mutations = {
  setFirstName(state, firstName) {
    state.firstName = firstName;
  },
  setLastName(state, lastName) {
    state.lastName = lastName;
  },
  setSeniority(state, seniority) {
    state.seniority = seniority;
  },
  setAchievements(state, achievements) {
    state.achievements = achievements;
  },
  addAchievement(state, achievement) {
    state.achievements.push(achievement);
  },
  setStrengths(state, strengths) {
    state.strengths = strengths;
  },
  addStrength(state, strength) {
    state.strengths.push(strength);
  },
  setOpportunities(state, opportunities) {
    state.opportunities = opportunities;
  },
  addOpportunity(state, opportunity) {
    state.opportunities.push(opportunity);
  },
  removeAchievement(state, achievement) {
    const index = state.achievements.indexOf(achievement);
    if (index === -1) return;

    state.achievements.splice(index, 1);
  },
  removeStrength(state, strength) {
    const index = state.strengths.indexOf(strength);
    if (index === -1) return;

    state.strengths.splice(index, 1);
  },
  removeOpportunity(state, opportunity) {
    const index = state.opportunities.indexOf(opportunity);
    if (index === -1) return;

    state.opportunities.splice(index, 1);
  },
  setBehaviour(state, behaviour) {
    state.behaviour = behaviour;
  },
};

export const actions = {
  storeReport(_, report) {
    report.code = process.env.AZURE_FUNCTION_CODE;
    return axios.post('/functions/processReview', report);
  },
};
