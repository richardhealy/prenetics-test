import { all, spawn } from 'redux-saga/effects'

import weatherSagas from './weather.sagas'

export default function* rootSaga() {
  yield all([
    spawn(weatherSagas),
  ])
}
