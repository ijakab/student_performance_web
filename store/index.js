import cookie from "cookie"
import jsCookie from "js-cookie";

export const state = () => ({
  loginData: {
    token: null,
    userType: null,
  },
});

export const mutations = {
  saveLoginData(state, {token}) {
    state.loginData.token = token;
  },
  SET_TOKEN(state, token) {
    state.loginData.token = token;
  },
};

export const actions = {
  async nuxtServerInit(store, {req}) {
    let token;
    if (req.headers.cookie)
      token = cookie.parse(req.headers.cookie);
    if (token) {
      store.commit("SET_TOKEN", token["token"]);
    }
  },
};

export const getters = {
  getToken: state => {
    return state.loginData.token;
  },
};
