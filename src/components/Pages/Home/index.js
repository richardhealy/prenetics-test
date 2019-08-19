import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { 
  getWeatherByCity, 
  getWeatherByLatLon
} from '../../../actions/weather.actions'

import Search from '../../common/Search'
import WeatherTable from '../../common/WeatherTable'

import enableLocation from '../../hoc/enableLocation'

import {
  onUnitsChange,
  onCitySearch,
  onCityChange,
  onLatLonSearch,
  onLatChange,
  onLonChange,
} from './funcs'

const HomePage = ({
  weather,
  currentCity,
  searches,
  getWeatherByCity,
  getWeatherByLatLon,
  coords,
  error,
}) => {

  const [city, setCity] = useState()
  const [latLon, setLatLon] = useState({lat:'', lon:''})
  const [units, setUnits] = useState('metric')

  useEffect(() => {
    if(!weather && coords) {
      const {latitude, longitude} = coords
      getWeatherByLatLon(latitude, longitude, units)
      setLatLon({lat:latitude, lon:longitude})
    }
  }, [coords, units, weather, getWeatherByLatLon])

  useEffect(() => {
    setCity(currentCity)
  }, [currentCity])

  return <div>
    <h1>Weather</h1>
    <Search 
      currentCity={currentCity}
      currentLat={latLon.lat}
      currentLon={latLon.lon}
      onCityChange={city => onCityChange(city, setCity)} 
      onLatChange={lat => onLatChange(lat, latLon, setLatLon)} 
      onLonChange={lon => onLonChange(lon, latLon, setLatLon)} 
      onCitySearch={() => onCitySearch(city, units, getWeatherByCity)}
      onLatLonSearch={() => onLatLonSearch(latLon, units, getWeatherByLatLon)}
    />
    <div>Last searches: {searches.join(', ')}</div>
    <hr />
    {
      !error && <div>
        <h2>Tempurature for: {currentCity ? currentCity : 'locating...' }</h2>
        <WeatherTable 
          weather={weather} 
          units={units}
          onUnitsChange={units => 
          onUnitsChange(currentCity, units, setUnits, getWeatherByCity)}
        />
      </div>
    }
    {
      error && <p>Could find location: {city}. Please try again.</p>
    }
	</div>
}

const mapStateToProps = state => ({
  weather: state.weatherReducer.weather,
  searches: state.weatherReducer.searches,
  currentCity: state.weatherReducer.currentCity,
  error: state.weatherReducer.error,
})

const mapDispatchToProps = dispatch => ({
  getWeatherByCity: (city, units) => {
    return dispatch(getWeatherByCity(city, units))
  },
  getWeatherByLatLon: (lat, lon, units) => {
    return dispatch(getWeatherByLatLon(lat, lon, units))
  }
})

export default enableLocation(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage))
