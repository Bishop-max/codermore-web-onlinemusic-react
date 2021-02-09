import {Map} from 'immutable';

import * as actionType from './config';

const defaultState = Map({
  loginInfo:{},
  token:"",
  isShowPage:false
})

function reducer (state = defaultState,action){
  switch(action.type){
    case actionType.CHANGE_LOGIN_INFO:
      return state.set("loginInfo",action.loginInfo)
    case actionType.CHANGE_TOKEN:
      return state.set("token",action.token)
    case actionType.IS_SHOW_LOGIN_PAGE:
      return state.set("isShowPage",action.isShowPage)
    default:
      return state;
  }
}

export default reducer;