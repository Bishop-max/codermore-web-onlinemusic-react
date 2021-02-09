import * as actionTypes from './config'
import { getTopBanners,getHotRecommend,getNewAlbum,getTopList,getArtistList } from '@/network/recommend'

export const changeTopBannerAction = (res) =>{
  return {
    type:actionTypes.CHANGE_TOP_BANNER,
    topBanners:res.banners
  }
}

export const changeHotRecommendAction = (res) =>{
  return {
    type:actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommend:res.result
  }
}

export const changeNewAlbumAction = (res) =>{
  return {
    type:actionTypes.CHANGE_NEWALBUM,
    newAlbum:res.albums
  }
}


export const changeUpRankingAction = (res) =>{
  return {
    type:actionTypes.CHANGE_UP_RANKING,
    upRanking:res.playlist
  }
}
export const changeNewRankingAction = (res) =>{
  return {
    type:actionTypes.CHANGE_NEW_RANKING,
    newRanking:res.playlist
  }
}
export const changeOrigionRankingAction = (res) =>{
  return {
    type:actionTypes.CHANGE_ORIGION_RANKING,
    origionRanking:res.playlist
  }
}

export const changeSettleSingerAction = (res) =>{
  return {
    type:actionTypes.CHANGE_SETTLE_SINGER,
    settleSingers:res.artists
  }
}

export const getTopBannersAction = (dispatch) =>{
  getTopBanners().then(res =>{
    // console.log(res);
    dispatch(changeTopBannerAction(res))
  })
}

export const getHotRecommendAction = (limit) =>{
 return dispatch =>{
  getHotRecommend(limit).then(res =>{
    // console.log(res);
    dispatch(changeHotRecommendAction(res))
  })
 }
}

export const getNewAlbumAction = (limit) =>{
  return dispatch =>{
    getNewAlbum(limit).then(res =>{
      // console.log(res);
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx) =>{
  return dispatch =>{
    getTopList(idx).then(res =>{
      // console.log(res);
      switch(idx){
        case 0:
          dispatch(changeUpRankingAction(res))
          break;
        case 2:
          dispatch(changeNewRankingAction(res))
          break;
        case 3:
          dispatch(changeOrigionRankingAction(res))
          break;
        default:
      }
    })
  }
}

export const getSettleSingersAction = () =>{
  return dispatch =>{
    getArtistList(5,5001).then(res =>{
      dispatch(changeSettleSingerAction(res))
    })
  }
}