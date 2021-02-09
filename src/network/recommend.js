import request from './index'

export function getTopBanners(){
  return request({
    url:"/banner"
  })
}

export function getHotRecommend(limit = 8){
  return request({
    url:'/personalized',
    params:{
      limit
    }
  })
}

export function getNewAlbum(limit =10){
  return request({
    url:"/top/album",
    params:{
      limit
    }
  })
}

export function getTopList(idx){
  return request({
    url:"/top/list",
    params:{
      idx
    }
  })
}

//请求入驻歌手数据
export function getArtistList(limit,cat){
  return request({
    url:"/artist/list",
    params:{
      cat,
      limit
    }
  })
}