let mutations = {
  MANAGE_URL(state, url) {
    state.results.unshift(url);
  },
  MANAGE_LOADING(state, loading) {
    state.loading = loading;
  }
};
export default mutations;
