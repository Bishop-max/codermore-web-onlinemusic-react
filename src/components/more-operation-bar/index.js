import React, { memo } from 'react'

import {OperationBarWrapper} from './style'

export default memo(function MoreOperationBar(props) {

  const {favorTitle,shareTitle,downloadTitle,commentTitle} = props

  return (
    <OperationBarWrapper>
      <div className="play">
        <a href="/todo" className="play-icon">
          <i className="sprite_button">
            <span>播放</span>
          </i>
        </a>
        <a href="/todo" className="add-icon sprite_button"></a>
      </div>
      <a href="/abc" className="item">
        <i className="icon favor-icon sprite_button"><span>{favorTitle}</span></i>
      </a>
      <a href="/abc" className="item">
        <i className="icon share-icon sprite_button"><span>{shareTitle}</span></i>
      </a>
      <a href="/abc" className="item">
        <i className="icon download-icon sprite_button"><span>{downloadTitle}</span></i>
      </a>
      <a href="/abc" className="item">
        <i className="icon comment-icon sprite_button"><span>({commentTitle})</span></i>
      </a>
    </OperationBarWrapper>
  )
})
