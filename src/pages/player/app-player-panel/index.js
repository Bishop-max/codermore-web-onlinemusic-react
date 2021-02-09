import React, { memo } from 'react'

import {PlayerPanelWrapper} from './style'

import PanelHeader from './panel-header'
import PanelList from './panel-list'
import LyricPanel from './lyric-panel'
import { useSelector } from 'react-redux'

export default memo(function PlayerPanel(props) {
  const {currentSong} = useSelector(state => ({
    currentSong:state.getIn(["player","currentSong"])
  }))

  const pic = (currentSong && (currentSong.al.picUrl + "?imageView&blur=40x20")) || "";
  return (
    <PlayerPanelWrapper>
      <PanelHeader {...props}></PanelHeader>
      <div className="main playpanel_bg">
        <img className="image" src={pic} alt=""/>
        <PanelList/>
        <span className="line"></span>
        <LyricPanel/>
      </div>
    </PlayerPanelWrapper>
  )
})
