
let token = '';//localStorage.getItem('token');
let auth = '';//localStorage.getItem('auth');
const initialState = auth ? { loggedIn: true, auth, token } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        loggingIn: true,
        auth: action.auth,
        token: action.token
      };
    case 'LOGOUT_SUCCESS':
      return {
        auth: false
      };
    default:
      return state
  }
}