import React, { memo } from 'react'

import {getSizeImage} from '@/utils/format-utils'

import { Input } from 'antd'

import {SelfCommentWrapper} from './style'
import { useSelector } from 'react-redux'

export default memo(function SelfComment() {
  const { TextArea } = Input;

  const {loginInfo} = useSelector(state =>({
    loginInfo:state.getIn(["login","loginInfo"])
  }))
  const info = loginInfo && Object.keys(loginInfo).length !== 0 ? true :false

  return (
    <SelfCommentWrapper>
      <div className="self-comment">
        <div className="avator">
          <img src={info ? getSizeImage(loginInfo.profile.avatarUrl,50) :"http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"} alt="" />
        </div>
        <div className="comment-info">
          <TextArea
            value="评论"
            placeholder="Controlled autosize"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
          <div className="comment-bottom">
            <div className="comment-bottom-left">
              <button className="btn emoji sprite_icon2"></button>
              <button className="btn at sprite_icon2"></button>
            </div>
            <div className="commment-bottom-right">
              <span>140</span>
              <button className="sprite_button2 comment-button">评论</button>
            </div>
          </div>
        </div>
      </div>
    </SelfCommentWrapper>
  )
})
