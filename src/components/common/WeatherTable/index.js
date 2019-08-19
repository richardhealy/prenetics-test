import React from 'react'

import {
  onSelectChange,
} from './funcs'

export const WeatherTable = ({
  weather,
  onUnitsChange,
  units,
}) => {

  if(!weather) {
    return null
  }

  const { list } = weather

  return (
    <>
      <div>
        <label>Units: </label>
        <select onChange={event => onSelectChange(event, onUnitsChange)}>
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
        </select>
      </div>
      <table width="100%" >
        <thead>
          <tr>
            <th>Date</th>
            <th className="text-right">Temperature</th>
            <th className="text-right">Humidity</th>
            <th className="text-right">Pressure</th>
          </tr>
        </thead>
        <tbody>
        {
          list && list.map((row, index) => (
            <tr key={index}>
              <td>{row.dt_txt}</td>
              <td className="text-right">{row.main.temp}˚{units === 'metric' ? 'C' : 'F'}</td>
              <td className="text-right">{row.main.humidity}</td>
              <td className="text-right">{row.main.pressure}</td>
            </tr>  
          ))
        }
        </tbody>
      </table>
    </>
  )
}

export default WeatherTable