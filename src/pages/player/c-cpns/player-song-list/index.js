import React, { memo, useEffect } from 'react'

import { getSimiPlayListAction } from './../../store/actionCreater'

import MoreThemeHeaderPlayer from '@/components/more-theme-header-player'
import {getSizeImage} from '@/utils/format-utils'

import { PlayerSongListWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'

export default memo(function PlayerSongList() {

  const { currentSong, simiPlayLists } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    simiPlayLists: state.getIn(["player", "simiPlayLists"])
  }))

  const id = (currentSong && currentSong.id) || 0
  const playList = simiPlayLists || []

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSimiPlayListAction(id))
  },[dispatch,currentSong])
  return (
    <PlayerSongListWrapper>
      <MoreThemeHeaderPlayer title="包含这首歌的歌单" />
      {
        playList.map((item, index) => {
          return (
            <div className="similist-wrap" key={item.id}>
              <div className="left">
                <img src={getSizeImage(item.coverImgUrl,62)} alt="" />
              </div>
              <div className="right">
                <a className="list-name text-nowrap" href="/abc">{item.name}</a>
                <p >by<a className="author" href="/abc">{item.creator.nickname}</a></p>
              </div>
            </div>
          )
        })
      }
    </PlayerSongListWrapper>
  )
})
