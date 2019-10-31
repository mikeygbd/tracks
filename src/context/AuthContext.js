import createDataContext from './createDataContext'

const authReducer = (state, action) => {
  switch (action.type) {
    default:
    return state

  }
}

  const signup = (dispatch) => {
    return ({ email, password }) => {
      // make api request to signUp with that email and Password
      // if we sign up, modify our state and say that we are authenticated
      // if signing up fails we need to reflect an error message


    }
  }

  const signin = (dispatch) => {
    return ({ email, password }) => {
      // make api request to signin with that email and Password
      // handle success
      // if signin fails we need to reflect an error message

    }
  }

  const signout = (dispatch) => {
    return () => {

    }
  }

export const { Provider, Context } = createDataContext(
  authReducer,
  {singin, signout, signup},
  { isSignedIn: false }
)
