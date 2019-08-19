export const onSelectChange = (event, onUnitsChange) => {
  
  const units = event.target.value
  onUnitsChange(units)
}
