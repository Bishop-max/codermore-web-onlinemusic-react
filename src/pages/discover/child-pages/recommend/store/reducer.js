import { CHANGE_TOP_BANNER,CHANGE_HOT_RECOMMEND,CHANGE_NEWALBUM,CHANGE_UP_RANKING,CHANGE_NEW_RANKING,CHANGE_ORIGION_RANKING,CHANGE_SETTLE_SINGER} from './config'
import { Map} from 'immutable'
// import newAlbum from '../child-cpn/new-album'


const defaultState = Map({
  topBanners:[],
  hotRecommend:[],
  newAlbum:[],

  upRanking:{},
  newRanking:{},
  origionRanking:{},

  settleSingers:[]
})

function reducer(state = defaultState,action){
  switch(action.type){
    case CHANGE_TOP_BANNER:
      return state.set("topBanners",action.topBanners)
    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend",action.hotRecommend)
    case CHANGE_NEWALBUM:
      return state.set("newAlbum",action.newAlbum)

    case CHANGE_UP_RANKING:
      return state.set("upRanking",action.upRanking)
    case CHANGE_NEW_RANKING:
      return state.set("newRanking",action.newRanking)
    case CHANGE_ORIGION_RANKING:
      return state.set("origionRanking",action.origionRanking)
    case CHANGE_SETTLE_SINGER:
      return state.set("settleSingers",action.settleSingers)
    default :
      return state
  }
}

export default reducer;