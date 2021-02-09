import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { getSizeImage } from '@/utils/format-utils'

import MoreOperationBar from '@/components/more-operation-bar'

import { PlayerInfoWrapper, InfoLeft, InfoRight } from './style'


export default memo(function MorePlayerInfo() {

  const [isSpread,setIsSpread] = useState(false);

  const { currentSong, lyricList,commentCount } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    lyricList: state.getIn(["player", "lyricList"]),
    commentCount:state.getIn(["player","commentCount"])
  }),shallowEqual)

  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const songName = (currentSong && currentSong.name) || "";
  const singer = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const label = (currentSong.al && currentSong.al.name) || "";
  const comment = commentCount || "0";

  const totalLyricCount = isSpread ? lyricList.length : 13;

  const isShow = lyricList.length ? false : true;

  return (
    <PlayerInfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={getSizeImage(picUrl, 131)} alt="" />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="/todo">生成外链播放器</a>
        </div>
      </InfoLeft>
      <InfoRight isSpread={isSpread}>
        <div className="hd">
          <div><i className="sprite_icon2"></i></div>
          <div className="title">
            <span>{songName}</span>
          </div>
        </div>
        <p className="singer">
          <span>歌手：</span>
          <a href="">{singer}</a>
        </p>
        <p className="label">
          <span>所属专辑：</span>
          <a href="">{label}</a></p>
        <MoreOperationBar
          favorTitle="收藏"
          shareTitle="分享"
          downloadTitle="下载"
          commentTitle={comment}
        />
        <div className="lyric">
          <div className="lyric-info">
          {
            lyricList.slice(0,totalLyricCount).map((item, index) => {
              return <p key={item.time}>{ item.content}</p>
            })
          }
          </div>
          <button 
            className="lyric-control"
            onClick={e => setIsSpread(!isSpread)}  >
            {isSpread ? "收起":"展开"}
            <i className ="sprite_icon2"></i>
          </button>
        </div>
        <div className="user-operation">
          <p>
            {
              isShow ? <a href="/abe">上传歌词</a> : null
            }
            <a href="/abc">报错</a>
          </p>
        </div>
      </InfoRight>
    </PlayerInfoWrapper>
  )
})
