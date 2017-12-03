export default {
  GET_ITEM: ({ commit, state }, { value, id }) => {
    axios.get(`https://api.github.com/users/${value}`)
    .then((responce) => {
      commit('GET_NEW_ITEM', { data: responce.data, id: id });
    })
    .catch(() => {
      commit('GET_ERROR_ITEM', { id: id });
    });
  },
  MOUNT_ITEM: ({ commit, state }) => {
    commit('SET_MOUNT_ITEM');
  }
}
