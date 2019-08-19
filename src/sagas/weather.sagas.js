import { all, call, put, takeEvery } from 'redux-saga/effects'
import api from '../api'

import {
  actions as weatherActions,
  getWeatherByCitySuccess,
  getWeatherByCityFailure,
  getWeatherByLatLonSuccess,
  getWeatherByLatLonFailure,
} from '../actions/weather.actions'

function *getWeatherByCitySaga (params) {
  
  const {
    city, 
    units,
  } = params

  try {
    const data = yield call(api.Weather.getByCity, city, units)
    const dataCity = data.city
    const {
      name,
    } = dataCity
    yield put(getWeatherByCitySuccess(data, name))
  } catch (error) {
    yield put(getWeatherByCityFailure(error, city))
  }
}


function *getWeatherByLatLonSaga (params) {
  const {
    lat,
    lon, 
    units,
  } = params

  try {
    const data = yield call(api.Weather.getByLatLon, lat, lon, units)
    const dataCity = data.city
    const {
      name,
    } = dataCity
    yield put(getWeatherByLatLonSuccess(data, name))
  } catch (error) {
    
    yield put(getWeatherByLatLonFailure(error))
  }
}


export default function* weatherSagas () {
  yield all([
    takeEvery(weatherActions.WEATHER.BY_CITY_GET, getWeatherByCitySaga),
    takeEvery(weatherActions.WEATHER.BY_LAT_LON_GET, getWeatherByLatLonSaga)
  ])
}