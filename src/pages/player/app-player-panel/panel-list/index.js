import React, { memo, useEffect } from 'react'
//样式组件
import { PanelListWrapper } from './style'
//store
import {getCurrentSongAction} from './../../store/actionCreater'
//工具函数
import {formatDate} from '@/utils/format-utils'
//第三方库
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

export default memo(function PanelList() {
  const { playList,currentSongIndex } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSongIndex:state.getIn(["player","currentSongIndex"])
  }))

  useEffect(() =>{
    console.log(currentSongIndex);
  })

  //播放列表歌曲
  const dispatch = useDispatch();
  const PlayMusic = (id) =>{
    dispatch(getCurrentSongAction(id))
  }
  return (
    <PanelListWrapper>
      {
        playList.map((item, index) => {
          return (
            <div onClick={e => { PlayMusic(item.id)}} 
                 key={item.id} 
                 className={classNames("list-item",{"active" : currentSongIndex === index})}>
              <div className="left text-nowrap">{item.name}</div>
              <div className="right">
                <span className="singer text-nowrap">{item.ar[0].name}</span>
                <span className="duration">{formatDate(item.dt,"mm:ss")}</span>
                <span className="link">
                  <i className="link-icon playlist_sprite"></i>
                </span>
              </div>
            </div>
          )
        })
      }
    </PanelListWrapper>
  )
})
