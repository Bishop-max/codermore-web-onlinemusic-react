import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

import {scrollTo} from '@/utils/ui-helper'

import { LyricPanelWrapper } from './style'

export default memo(function LyricPanel() {

  const { lyricList, currentLyricIndex} = useSelector(state => ({
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }),shallowEqual)

  const panelRef = useRef();
  useEffect(() =>{
    if(currentLyricIndex >0 && currentLyricIndex < 3) return ;
    scrollTo(panelRef.current,(currentLyricIndex - 3) * 32,300)
  },[currentLyricIndex])

  return (
    <LyricPanelWrapper ref={panelRef}>
      {
        lyricList.map((item, index) => {
          return (
            <div className={classNames("lyric-item", { "active": index === currentLyricIndex })} key={item.time}>
              <p>{item.content}</p>
            </div>
          )
        })
      }
    </LyricPanelWrapper>
  )
})
