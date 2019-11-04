import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { AsyncStorage } from 'react-native'
import { navigate } from '../navigationRef';
const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
    return { ...state, errorMessage: action.payload }
    case 'signup':
    return { errorMessage: '', token: action.payload}

    default:
    return state

  }
}

const signup = (dispatch) => async ({ email, password }) => {
  try{
    const response = await trackerApi.post('/signup', { email, password })
    await AsynStorage.setItem('token', response.data.token)
    dispatch({ type: 'signup', payload: response.data.token})
    navigate('TrackList')
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'})
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
  {signin, signout, signup},
  { token: null, errorMessage: '' }
)
