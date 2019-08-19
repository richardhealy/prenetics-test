import {
  onUnitsChange,
  onCitySearch,
  onLatLonSearch,
} from '../index'

describe('onUnitsChange', () => {
  test('calls setUnits and getWeather with correct params', () => {
    
    const setUnits = jest.fn()
    const getWeather = jest.fn()
    const city = 'London'
    const units = 'metric'
    onUnitsChange(city, units, setUnits, getWeather)
    expect(setUnits).toHaveBeenCalledTimes(1)
    expect(setUnits).toHaveBeenCalledWith(units)
    expect(getWeather).toHaveBeenCalledTimes(1)
    expect(getWeather).toHaveBeenCalledWith(city, units)
  })
})

describe('onCitySearch', () => {
  test('calls getWeatherByCity with correct param', () => {
    
    const getWeatherByCity = jest.fn()
    const city = 'London'
    const units = 'metric'
    onCitySearch(city, units, getWeatherByCity)
    expect(getWeatherByCity).toHaveBeenCalledTimes(1)
    expect(getWeatherByCity).toHaveBeenCalledWith(city, units)
  })
})


describe('onLatLonSearch', () => {
  test('calls getWeatherByLatLon with correct param', () => {
    
    const getWeatherByLatLon = jest.fn()
    const latLon = {
      lat:51.5073,
      lon:-0.1277
    }
    const units = 'metric'
    onLatLonSearch(latLon, units, getWeatherByLatLon)
    expect(getWeatherByLatLon).toHaveBeenCalledTimes(1)
    expect(getWeatherByLatLon).toHaveBeenCalledWith(51.5073, -0.1277 , units)
  })
})


