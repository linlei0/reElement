import { create } from 'dva-core'
import login from './models/login.js'
import publics from './models/public.js'

const models = [
  login,
  publics
]

const app = create()

models.forEach (o=> {
  app.model(o)
})
app.start()
const store = app._store;

export default store

