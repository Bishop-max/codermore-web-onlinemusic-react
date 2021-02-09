import React, { memo, useEffect } from 'react'

import { HotRecommendWrapper } from './style'

import MoreThemeHeader from '@/components/more-theme-header'
import MoreSongsCover from '@/components/more-songs-cover'


import { useDispatch, useSelector } from 'react-redux'

import { getHotRecommendAction } from './../../store/actionCreators'

export default memo(function MoreHotRecommend() {
  //state

  //redux hooks
  const { recommend } = useSelector(state => ({
    recommend: state.getIn(["recommend", "hotRecommend"])
  }))
  const dispatch = useDispatch();

  //other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  },[dispatch])

  return (
    <HotRecommendWrapper>
      <MoreThemeHeader title="热门推荐" keyword={["华语", "流行", "摇滚", "民谣", "电子"]}></MoreThemeHeader>
      <div className="recommend-list">
        {
          recommend.map((item, index) => {
            return <MoreSongsCover key={item.id} info={item}></MoreSongsCover>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
