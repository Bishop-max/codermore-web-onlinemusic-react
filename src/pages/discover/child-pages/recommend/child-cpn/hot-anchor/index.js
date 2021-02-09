import React, { memo } from 'react'

import { HotAnchorWrapper } from './style'

import { hotRadios } from '@/common/local-data'

export default memo(function HotAnchor() {
  return (
    <HotAnchorWrapper>
      <div className="anchor-wrap">
        <div className="anchor-top">
          <p>热门主播</p>
        </div>
        <div className="anchor-list">
          {
            hotRadios.map((item, index) => {
              return (
                <div className="list-item" key={item.name}>
                  <a href="/todo">
                    <img src={item.picUrl} alt="" />
                  </a>
                  <div className="item-info">
                    <p className="name">{ item.name }</p>
                    <p className="info text-nowrap">{ item.position }</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </HotAnchorWrapper>
  )
})
