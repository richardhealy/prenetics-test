import { actions as weatherActions } from '../actions/weather.actions'

const initialState = {
  searches:[],
  weather:null,
  currentCity:null,
  error:false,
}

const rootReducer = (state = initialState , action) => {
  switch (action.type) {
    case weatherActions.WEATHER.BY_CITY_GET:
      const { searches } = state
      return {
        ...state,
        error:false,
        searches:[action.city, ...searches.slice(0,2)]
      }
    case weatherActions.WEATHER.BY_LAT_LON_GET:
      return {
        ...state,
        error:false,
      }
    case weatherActions.WEATHER.BY_CITY_SUCCESS:
    case weatherActions.WEATHER.BY_LAT_LON_SUCCESS:
      return {
        ...state,
        weather:action.weather,
        currentCity:action.city,
      }
      case weatherActions.WEATHER.BY_CITY_FAILURE:
      case weatherActions.WEATHER.BY_LAT_LON_FAILURE:
        return {
          ...state,
          error:true
        }
    default:
      return state
  }
}

export default rootReducer;