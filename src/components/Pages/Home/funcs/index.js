export const onUnitsChange = (city, units, setUnits, getWeather) => {
  setUnits(units)
  getWeather(city, units)
}

export const onCitySearch = (city, units, getWeatherByCity) => {
  getWeatherByCity(city, units)
}

export const onLatLonSearch = (latLon, units, getWeatherByLatLon) => {
  getWeatherByLatLon(latLon.lat, latLon.lon, units)
}

export const onCityChange = (city, setCity) => {
  setCity(city)
}

export const onLatChange = (lat, latLon, setLatLon) => {
  setLatLon({
    ...latLon,
    lat:parseFloat(lat)
  })
}

export const onLonChange = (lon, latLon, setLatLon) => {
  setLatLon({
    ...latLon,
    lon:parseFloat(lon)
  })
}