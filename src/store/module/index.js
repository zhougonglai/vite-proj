import { getActivityPackage } from "~/service/activity"
import { getPackagePrice } from "~/service/tools";

export default {
  namespaced: true,
  state: () => ({
    packages: {
      activity: null,
      price: null,
    }
  }),
  mutations: {
    setPackage(state, { name, packages }){
      state.packages[name] = packages
    }
  },

  actions: {
    async fetchActivityPackage({ commit }, params) {
      const { data } = await getActivityPackage(params);
      commit('setPackage', { name: 'activity', packages: data });
      return data
    },
    async fetchPackagePrice({ commit }, params) {
      const { data } = await getPackagePrice(params);
      const packages = {
        ...data,
        list: data.list.sort((a, b) => b.is_recommend - a.is_recommend)
      }
      commit('setPackage', { name: 'price', packages });
      return packages
    }
  }
}
