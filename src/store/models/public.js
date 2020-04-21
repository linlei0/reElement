// import { login } from '../../api/login'
import i18n from '../../lang/index'
export default {
  namespace: 'publics',
  state: {
    lang: 'en',
    i18n
  },
  reducers: {
    changeLang(state, action) {
      console.log(action.payload)
      return {
        ...state,
        ...action.payload
      }
    }
  },
  effects: {
    *setLocale({ payload }, { call, put }) {
      const { resolve, lang } = payload;
      // const response = yield call(login, postData)
      // const response = { userName: 'linlei' }
      i18n.locale = lang
      yield put({
        type: 'changeLang',
        payload: {
          lang: lang,
          i18n
        }
      })
      !!resolve && resolve(response)
    }
  }
}