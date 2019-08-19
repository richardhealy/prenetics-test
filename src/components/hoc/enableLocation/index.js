import { geolocated } from "react-geolocated"

export const enableLocation = Component => {
  return geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Component)
}

export default enableLocation