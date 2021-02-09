import React, { memo, useEffect } from 'react'

import {getCommentsAction} from './../../store/actionCreater'

import CommentHeader from './c-cpns/comment-header'
import SelfComment from './c-cpns/self-comment'
import CommentTypeTitle from './c-cpns/comment-type-title'
import CommentItem from './c-cpns/comment-item'

import { PlayerCommentWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'

export default memo(function MorePlayerComment() {
  const {currentSong,comments,hotComments,commentCount} = useSelector(state => ({
    currentSong:state.getIn(["player","currentSong"]),
    comments:state.getIn(["player","comments"]),
    hotComments:state.getIn(["player","hotComments"]),
    commentCount:state.getIn(["player","commentCount"])
  }))
  const id = (currentSong && currentSong.id) || "";
  const count = commentCount || 0
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getCommentsAction(id))
  },[dispatch,currentSong])
  return (
    <PlayerCommentWrapper>
      {/* 评论标题 */}
      <CommentHeader count={count} />
      {/* 个人评论 */}
      <SelfComment />
      {/* 精彩评论标题 */}
      <CommentTypeTitle title="精彩评论" />
      {/* 精彩评论列表 */}
      <div className="nc-comment-list">
        {
          hotComments.map((item,index) => {
            return <CommentItem index={index} comment={item} key={item.commentId}/>
          })
        }
      </div>
      {/* 最新评论标题 */}
      <CommentTypeTitle  title="最新评论"/>
      <div className="new-comment-list">
      {
          comments.map((item,index) => {
            return <CommentItem index={index} comment={item} key={item.commentId}/>
          })
        }
      </div>
    </PlayerCommentWrapper>
  )
})
