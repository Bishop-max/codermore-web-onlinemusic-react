import React, { memo } from 'react'

import {CommentTypeTitleWrapper} from './style'

export default memo(function CommentTypeTitle(props) {
  const {title ="未定义标题"} = props
  return (
    <CommentTypeTitleWrapper>
      <div className="nc-title">
        <p>{title}</p>
      </div>
    </CommentTypeTitleWrapper>
  )
})
