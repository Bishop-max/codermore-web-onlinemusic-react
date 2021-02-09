import React, { memo } from 'react'

import { AlbumCoverWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function MoreAlbumCover(props) {

  const { info,size = 130,width = 153 ,bgp = "-845px" } = props;

  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl,size)} alt="" />
        <a href="/todo" className="cover image_cover"></a>
        <i className="sprite_icon play"></i>
      </div>
      <div className="album-info">
        <p className="name text-nowrap">{info.name}</p>
        <p className="artist text-nowrap">{info.artist.name}</p>
      </div>
    </AlbumCoverWrapper>
  )
})
