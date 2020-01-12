export default function ({$axios, redirect, store}) {
  $axios.onRequest(config => {
      config.headers.Authorization = 'Bearer ' + store.getters.getToken
  })
}
