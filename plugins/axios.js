import jsCookie from "js-cookie"

export default function ({$axios, store}) {
  $axios.onRequest(config => {
    config.headers.Authorization = 'Bearer ' + jsCookie.get("token");
  });
}
