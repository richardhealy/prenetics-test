export const onCityInputChange = (event, onCityChange) =>  {
    
  const city = event.target.value
  onCityChange(city)
}

export const onCityInputKeyDown = (event, onCityChange, onCitySearch) => {
  if (event.key === 'Enter') {
      const city = event.target.value
      onCityChange(city)
      onCitySearch()
  }
}

export const onLatInputChange = (event, onLatChange) => {
      
  const lat = event.target.value
  onLatChange(lat)
}

export const onLonInputChange = (event, onLonChange) => {
      
  const lon = event.target.value
  onLonChange(lon)
}
