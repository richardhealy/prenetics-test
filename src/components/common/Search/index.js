import React from 'react'
import {
  onCityInputChange,
  onCityInputKeyDown,
  onLatInputChange,
  onLonInputChange,
} from './funcs'

export const Search = ({
  onCityChange,
  onLatLonSearch,
  onCitySearch,
  onLatChange,
  onLonChange,
  currentCity,
  currentLat,
  currentLon,
}) => {

  return (
    <div>
      <div>
        <label>City: </label>
        <input 
          onChange={event => onCityInputChange(event, onCityChange)} 
          onKeyDown={event => onCityInputKeyDown(event, onCityChange, onCitySearch)}
          defaultValue={currentCity}
        />
        <button onClick={onCitySearch}>Search</button>
      </div>
      <div>
        <label>Lat: </label>
        <input 
          onChange={event => onLatInputChange(event, onLatChange)} 
          defaultValue={currentLat}
        />
        <label>Lon: </label>
        <input 
          onChange={event => onLonInputChange(event, onLonChange)} 
          defaultValue={currentLon}
        />
        <button onClick={onLatLonSearch}>Search</button>
      </div>
    </div>
  )
}

export default Search