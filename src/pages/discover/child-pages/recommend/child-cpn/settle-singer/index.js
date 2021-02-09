import React, { memo, useEffect } from 'react'

import MoreThemeHeaderSmall from '@/components/more-theme-header-small'

import { SettleSingerWrapper } from './style'

import { getSettleSingersAction } from '../../store/actionCreators'
import { useDispatch,useSelector } from 'react-redux'

export default memo(function SettleSinger() {

  //redux hook
  const {settleSingers} = useSelector(state => ({
    settleSingers:state.getIn(["recommend","settleSingers"])
  }))
  const dispatch = useDispatch();

  //其他hook
  useEffect(() => {
    dispatch(getSettleSingersAction())
  }, [dispatch])

  return (
    <SettleSingerWrapper>
      <div className="content">
        <div className="singer-top">
          <span>入驻歌手</span>
          <a href="/todo">查看全部  &gt;</a>
        </div>
        <div className="singer-list">
          {
            settleSingers.map((item,index) =>{
              return (
                <MoreThemeHeaderSmall singer={item} key={item.id}/>
              )
            })
          }
        </div>
        <div className="singer-bottom">
          <a href="/todo">
            <i>申请成为网易音乐人</i>
          </a>
        </div>
      </div>
    </SettleSingerWrapper>
  )
})
