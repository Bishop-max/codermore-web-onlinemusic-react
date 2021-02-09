import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '@/pages/discover/child-pages/recommend/store'
import { reducer as playerReducer } from '@/pages/player/store'
import { reducer as loginReducer} from '@/pages/login/store'

const cReducer = combineReducers({
  recommend:recommendReducer,
  player:playerReducer,
  login:loginReducer
})

export default cReducer;