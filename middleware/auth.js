export default function ({ store, redirect }) {
  if (!store.state.sessionId) {
    redirect('/login');
  }
}
