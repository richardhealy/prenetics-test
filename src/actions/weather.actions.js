export const actions = {
  WEATHER: {
    BY_CITY_GET: 'WEATHER_BY_CITY_GET',
    BY_CITY_SUCCESS: 'WEATHER_BY_CITY_SUCCESS',
    BY_CITY_FAILURE: 'WEATHER_BY_CITY_FAILURE',

    BY_LAT_LON_GET: 'WEATHER_BY_LAT_LON_GET',
    BY_LAT_LON_SUCCESS: 'WEATHER_BY_LAT_LON_SUCCESS',
    BY_LAT_LON_FAILURE: 'WEATHER_BY_LAT_LON__FAILURE'
  }
}

export const getWeatherByCity = (city, units) => ({
  type: actions.WEATHER.BY_CITY_GET,
  city, 
  units
})

export const getWeatherByCitySuccess = (weather, city, lat, lon) => ({
  type: actions.WEATHER.BY_CITY_SUCCESS,
  weather,
  city,
  lat, 
  lon,
})

export const getWeatherByCityFailure = error => ({
  type: actions.WEATHER.BY_CITY_FAILURE,
  error
})


export const getWeatherByLatLon = (lat, lon, units) => ({
  type: actions.WEATHER.BY_LAT_LON_GET,
  lat,
  lon, 
  units
})

export const getWeatherByLatLonSuccess = (weather, city, lat, lon) => ({
  type: actions.WEATHER.BY_LAT_LON_SUCCESS,
  weather,
  city,
  lat, 
  lon
})

export const getWeatherByLatLonFailure = error => ({
  type: actions.WEATHER.BY_LAT_LON_FAILURE,
  error
})