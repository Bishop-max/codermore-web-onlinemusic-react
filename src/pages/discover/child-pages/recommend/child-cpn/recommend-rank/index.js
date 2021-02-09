import React, { memo, useEffect } from 'react'


import { RecommendRankWrapper } from './style'
import { getTopListAction } from '../../store/actionCreators'

import MoreThemeHeader from '@/components/more-theme-header'
import MoreTopRanking from '@/components/more-top-ranking'

import { useDispatch, useSelector } from 'react-redux'

export default memo(function MoreRecommendRank() {

  //redux hooks
  const { upRanking, newRanking, origionRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    origionRanking: state.getIn(["recommend", "origionRanking"])
  }))
  const dispatch = useDispatch();

  // const { tracks= [] } = origionRanking;

  //其他 hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch])

  return (
    <RecommendRankWrapper>
      <MoreThemeHeader title="榜单" />
      <div className="tops">
        <MoreTopRanking info={origionRanking}/>
        <MoreTopRanking info={upRanking} />
        <MoreTopRanking info={newRanking} />
      </div>
    </RecommendRankWrapper>
  )
})
