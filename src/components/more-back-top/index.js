import React, { memo } from 'react'

import {BackTopWrapper} from './style'
import {BackTop} from 'antd'


export default memo(function index() {
  return (
    <BackTopWrapper>
      <BackTop>
          <div href="#" className="back-top" >
            <span className="sprite_icon2 upIcon"></span>
            <p>TOP</p>
          </div>
        </BackTop>
    </BackTopWrapper>
  )
})
