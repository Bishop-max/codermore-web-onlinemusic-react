import { getSongDetail,getLyric,getSimiSongs,getSimiPlayList,getComments } from '@/network/player';

import * as actionType from './config.js'

import { parseLyric } from '@/utils/parseLyric'

export const changeCurrentSongAction = (currentSong)=>{
  return {
    type:actionType.CHANGE_CURRENT_SONG,
    currentSong
  }
}

export const changePlayListAction = (playList)=>{
  return {
    type:actionType.CHANGE_PLAY_LIST,
    playList
  }
}

export const changeCurrentSongIndexAction = (index)=>{
  return {
    type:actionType.CHANGE_CURRENT_SONG_INDEX,
    index
  }
}

export const changeLyricListAction = (lyricList)=>{
  return {
    type:actionType.CHANGE_LYRIC_LIST,
    lyricList
  }
}

export const changeCurrentLyricIndexAction = (index) =>{
  return{
    type:actionType.CHANGE_CURRENT_LYRIC_INDEX,
    index
  }
}

export const changeSequenceAction = (sequence) =>{
  return {
    type:actionType.CHANGE_SEQUENCE,
    sequence
  }
}

//改变相似歌曲、歌单
export const changeSimiSongsAction = (simiSongs) =>{
  return {
    type:actionType.CHANGE_SIMISONGS,
    simiSongs:simiSongs
  }
}

export const changeSimiPlayListAction = (simiPlayLists) =>{
  return {
    type:actionType.CHANGE_SIMIPLAY_LIST,
    simiPlayLists
  }
}


//改变评论数据
export const changeCommentAction = (comments) =>{
  return {
    type:actionType.CHANGE_COMMENTS,
    comments
  }
}

export const changeHotCommentAction = (hotComments) =>{
  return {
    type:actionType.CHANGE_HOT_COMMENTS,
    hotComments
  }
}

export const changeCommentCountAction = (commentCount) =>{
  return {
    type:actionType.CHANGE_COMMENT_COUNT,
    commentCount
  }
}


export const changeCurrentIndexAndSongAction = (tag)=>{
  return (dispatch,getState) =>{
    const playList = getState().getIn(["player","playList"])
    const sequence = getState().getIn(["player","sequence"])
    let currentSongIndex = getState().getIn(["player","currentSongIndex"])

    switch(sequence){
      case 1://随机播放
        let randomIndex = Math.floor(Math.random() * playList.length);
        while(randomIndex === currentSongIndex){
          randomIndex = Math.floor(Math.random() * playList.length)
        }
        currentSongIndex = randomIndex;
        break;
      default://顺序播放
        currentSongIndex += tag
        if(currentSongIndex >= playList.length) currentSongIndex = 0;
        if(currentSongIndex < 0) currentSongIndex = playList.length-1;
    }

    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));

    //请求歌词
    dispatch(getLyricAction(currentSong.id))
  }
}

export const getCurrentSongAction = (ids)=>{
  return (dispatch,getState) =>{
    //1.根据id查找playList中是否存在该歌曲
    const playList = getState().getIn(["player","playList"])
    const songIndex = playList.findIndex( song => song.id === ids )
    //2.判断是否找到该歌曲
    let song = null;
    if(songIndex !== -1){//找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex))
      song = playList[songIndex];
      dispatch(changeCurrentSongAction(song))
      dispatch(getLyricAction(song.id))
    }else{//没有找到歌曲
      //请求歌曲数据
      getSongDetail(ids).then(res =>{
        song = res.songs && res.songs[0];
        if(!song) return;
        //1.将最新请求到的歌曲添加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song);
        //2.更新redux中的值
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
        // console.log(res);

        //3.请求歌曲歌词
        dispatch(getLyricAction(song.id))
      })
    }
  }
}

export const getLyricAction = (id)=>{
  return dispatch =>{
    getLyric(id).then(res =>{
      const lyric =  (res.lrc && res.lrc.lyric) || "";
      const lyricList =  parseLyric(lyric);
      dispatch(changeLyricListAction(lyricList))
    })
  }
}
//获取相似歌单，相似歌曲
export const getSimiSongsAction = (id)=>{
  return dispatch =>{
    
    getSimiSongs(id).then(res =>{
      const simiSongs = ( res && res.songs) || []
      dispatch(changeSimiSongsAction(simiSongs))
    })
  }
}

export const getSimiPlayListAction = (id) =>{
  return dispatch =>{
    getSimiPlayList(id).then(res =>{
      const simiPlayLists = (res && res.playlists) || []
      dispatch(changeSimiPlayListAction(simiPlayLists))
    })
  }
}

//获取评论的Action
export const getCommentsAction = (id,limit = 15) =>{
  return dispatch =>{
    getComments(id,limit).then(res =>{
      const comments = (res && res.comments) || [];
      const hotComments = (res && res.hotComments) || [];
      const commentCount = (res && res.total) || 0;
      dispatch(changeCommentAction(comments));
      dispatch(changeHotCommentAction(hotComments));
      dispatch(changeCommentCountAction(commentCount));
    })
  }
}