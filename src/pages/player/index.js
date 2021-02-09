import React, { memo } from 'react'

import { PlayerWrapper,PlayerLeft,PlayerRight } from './style'

import MorePlayerInfo from './c-cpns/player-info'
import MorePlayerComment from './c-cpns/player-comment'
import MorePlayerRelevant from './c-cpns/player-relevant'
import MorePlayerDownload from './c-cpns/player-download'
import MorePlayerSongList from './c-cpns/player-song-list'

export default memo(function MorePlayer() {

  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <MorePlayerInfo/>
          <MorePlayerComment/>
        </PlayerLeft>
        <PlayerRight>
          <MorePlayerSongList/>
          <MorePlayerRelevant/>
          <MorePlayerDownload/> 
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
