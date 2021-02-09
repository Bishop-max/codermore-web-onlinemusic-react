import request from './index'

export function getSongDetail(ids){
  return request({
    url:"/song/detail",
    params:{
      ids
    }
  })
}

export function getLyric(id){
  return request({
    url:"/lyric",
    params:{
      id
    }
  })
}

export function getSimiSongs(id){
  return request({
    url:'/simi/song',
    params:{
      id
    }
  })
}

export function getSimiPlayList(id) {
  return request({
    url:"/simi/playlist",
    params:{
      id
    }
  })
}

export function getComments(id,limit){
  return request({
    url:'/comment/music',
    params:{
      id,
      limit
    }
  })
}