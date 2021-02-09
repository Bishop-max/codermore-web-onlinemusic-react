import React, { memo, useEffect } from 'react'

import MoreThemeHeaderPlayer from '@/components/more-theme-header-player'
import { getSimiSongsAction,getCurrentSongAction } from '../../store/actionCreater'

import { PlayerRelevantWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

export default memo(function MorePlayerRelevant() {

  const { simiSongs,currentSong } = useSelector(state => ({
    simiSongs: state.getIn(["player", "simiSongs"]),
    currentSong:state.getIn(["player","currentSong"])
  }),shallowEqual)

  const id = (currentSong && currentSong.id) || 0

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimiSongsAction(id))
  }, [dispatch,currentSong])

  //播放歌曲
  const playMusic = (item) =>{
    dispatch(getCurrentSongAction(item.id))
  }

  return (
    <PlayerRelevantWrapper>
      <MoreThemeHeaderPlayer title="相似歌曲" />
      <div className="songs">
        {
          simiSongs.map((item, index) => {
            return (
              <div className="song-item" key={item.id}>
                <div className="txt">
                  <div className="song-name">
                    <a href="/abc">{item.name}</a>
                  </div>
                  <div className="singer-name">
                    <a href="/abc">{item.artists[0].name}</a>
                  </div>
                </div>
                <div className="opr">
                  <button className="item sprite_icon3 play" onClick={ e =>{ playMusic(item)}} ></button>
                  <button className="item sprite_icon3 add"></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </PlayerRelevantWrapper>
  )
})
