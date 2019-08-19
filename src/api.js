import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'

const superagent = superagentPromise(_superagent, global.Promise)
const API_KEY = "ffb8eb3396e6dbc691a13d57cacfe8e4"
const MAIN_API_ROOT = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&`

const responseBody = res => res.body

const requests = {
  get: (API, url) =>
    superagent
      .get(`${API}${url}`)
      .then(responseBody)
}

const Weather = {
  getByCity: (city, units = 'metric') => 
    requests.get(MAIN_API_ROOT, `q=${city}&units=${units}`),
  getByLatLon: (lat, lon, units) => 
    requests.get(MAIN_API_ROOT, `lat=${lat}&lon=${lon}&units=${units}`),
}

export default {
  Weather,
}
