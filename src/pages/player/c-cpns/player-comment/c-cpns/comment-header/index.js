import React, { memo } from 'react'

import { CommnetHeaderWrapper} from './style'

export default memo(function CommentHeader(props) {
  const {count,title="评论"} = props
  return (
    <CommnetHeaderWrapper>
      <div className="comment-top">
        <h3>{title}</h3>
        <span>共{count}条评论</span>
      </div>
    </CommnetHeaderWrapper>
  )
})
