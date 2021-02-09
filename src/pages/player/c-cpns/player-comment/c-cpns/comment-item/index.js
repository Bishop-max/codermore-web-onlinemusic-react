import React, { memo, useEffect } from 'react'

import { CommentItemWrapper} from './style'

import {getSizeImage,formatDate} from '@/utils/format-utils'

export default memo(function CommentItem(props) {
  const {index,comment} = props

  useEffect(() =>{
    console.log(index,comment)
  })

  const content = (comment && comment.content) || "正在加载中"
  const userName = (comment && comment.user.nickname) || "正在加载中"
  const picUrl = (comment && comment.user.avatarUrl) || ""
  const time = (comment && comment.time) || 0
  const likeCount = (comment && comment.likedCount) || 0
  return (
    <CommentItemWrapper tag={index}>
      <div className="nc-comment-item">
          <div className="avator">
            <img src={getSizeImage(picUrl,50)} alt=""/>
          </div>
          <div className="item-info">
            <div className="info-top">
              <a href="/abc" className="user-name">{userName}</a>
              <span>：{content}</span>
            </div>
            <div className="info-bottom">
              <div className="date">
                <p>{formatDate(time,"yyyy年MM月dd日")}</p>
              </div>
              <div className="reply">
                <button className="btn support">
                  <i className="support-icon sprite_icon3"></i>
                  ({likeCount})
                </button>
                <span>|</span>
                <button className="btn reply">回复</button>
              </div>
            </div>
          </div>
        </div>
    </CommentItemWrapper>
  )
})
