import React, { memo } from 'react'

import {ThemeHeaderSmallWrapper} from './style'

export default memo(function MoreThemeHeaderSmall(props) {

  const {singer} = props;
  return (
    <ThemeHeaderSmallWrapper>
      <div className="small-wrap">
        <div className="left">
          <img src={singer.img1v1Url} alt=""/>
        </div>
        <div className="right">
          <h4>
            {singer.name}
          </h4>
          <p>{(singer.alias && singer.alias[0]) || singer.name}</p>
        </div>
      </div>
    </ThemeHeaderSmallWrapper>
  )
})
