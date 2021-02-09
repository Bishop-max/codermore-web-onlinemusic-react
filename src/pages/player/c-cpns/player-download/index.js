import React, { memo } from 'react'

import MoreThemeHeaderPlayer from '@/components/more-theme-header-player'

import {PlayerDownloadWrapper} from './style'

export default memo(function MorePlayerDownload() {
  return (
    <PlayerDownloadWrapper>
      <MoreThemeHeaderPlayer title="网易云音乐多端下载" />
      <div className="download-icon ">
        <a href="/abc" className="iphone sprite_icon4"></a>
        <a href="/abc" className="pc sprite_icon4"></a>
        <a href="/abc" className="android sprite_icon4"></a>
      </div>
      <div className="sec">
        <p>同步歌单，随时畅听320k好音乐</p>
      </div>
      <a href="/abc">补充或修改歌曲资料&gt;</a>
    </PlayerDownloadWrapper>
  )
})
