import {NEWS} from '../../constants/ActionTypes'

const news = {
  data: [],
  data_user: []
}

export default function NewsReducer(state = news, action){
  switch(action.type){
    case NEWS.GET:
    return {
      ...state,
      data: action.payload
    }
    case NEWS.RELOAD:
    return{
      ...state,
      data: action.payload
    }
    case NEWS.USER:
    return{
      ...state,
      data_user: action.payload
    }
    default:
    return state
  }
}