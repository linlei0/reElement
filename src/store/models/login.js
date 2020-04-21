// import { login } from '../../api/login'
export default {
  namespace: 'login',
  state: {
    status: undefined
  },
  reducers: {
    changeLoginStatus(state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  },
  effects: {
    *login({ payload }, { call, put }) {
      const { resolve } = payload;
      // const response = yield call(login, postData)
      const response = { userName: 'linlei' }
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: 'login'
        }
      })
      !!resolve && resolve(response)
    }
  }
}