import env from "@/env"

export const state = () => ({
  users: [],
  pagination: {}
});

export const mutations = {
  updateUsers(state, users) {
    state.users = users;
  },
  updatePagination(state, pagination){
    state.pagination=pagination;
  }
};

export const getters = {
  getUsers(state) {
    return state.users;
  },
};

export const actions = {
  async getUsers({commit}, {page, filter}) {
    let {data} = await this.$axios.post(`user/filter?page=${page}`);
    commit('updateUsers', data.data.data);
    let pagination={
      perPage: null,
      page: null,
      total: null,
      lastPage: null
    };
    pagination.perPage=data.data.pagination.perPage;
    pagination.page=data.data.pagination.page;
    pagination.total=data.data.pagination.total;
    pagination.lastPage=data.data.pagination.lastPage;
    commit('updatePagination', pagination);
  },
};

