import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { PanelHeaderWrapper, PanelHeaderLeft, PanelHeaderRight } from './style'

export default memo(function PanelHeader(props) {

  //子组件向父组件传递。关闭歌单列表
  const { onClick} = props

  const { playList, currentSong } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSong: state.getIn(["player", "currentSong"])
  }))

  const length = (playList && playList.length) || 0;
  const name = (currentSong && currentSong.name) || "";
  return (
    <PanelHeaderWrapper className="playpanel_bg">
      <PanelHeaderLeft>
        <h3>播放列表({length})</h3>
        <div className="opr">
          <button className="favor-all">
            <i className="favor-all-icon playlist_sprite"></i>
            收藏全部
          </button>
          <span className="line"></span>
          <button className="clear">
            <i className="clear-icon playlist_sprite"></i>
            清除
          </button>
        </div>
      </PanelHeaderLeft>
      <PanelHeaderRight>
        <p>{ name}</p>
        <i className="close playlist_sprite" onClick={onClick}></i>
      </PanelHeaderRight>
    </PanelHeaderWrapper>
  )
})
