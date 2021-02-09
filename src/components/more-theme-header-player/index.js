import React, { memo } from 'react'

import {ThemeHeaderPlayerWrapper} from './style'

export default memo(function MoreThemeHeaderPlayer(props) {
  const {title=""} = props
  return (
    <ThemeHeaderPlayerWrapper>
      <div className="title-top">
          <p>{title}</p>
        </div>
    </ThemeHeaderPlayerWrapper>
  )
})
