export default function ({store, redirect}) {
  if (store.state.loginData.token) {
    return redirect('/dashboard')
  }
}
