import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style'

import MorePlayerPanel from './../app-player-panel'

import { getCurrentSongAction, changeSequenceAction, changeCurrentIndexAndSongAction, changeCurrentLyricIndexAction } from '../store/actionCreater.js'
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'

import { Slider, message } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default memo(function MorePlayerBar() {


  ///、redux-hook
  const { currentSong, lyricList, currentLyricIndex, playList } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
    playList: state.getIn(["player", "playList"])
  }), shallowEqual)

  const dispatch = useDispatch();

  ///、数据保存
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;

  ///、其他hook 
  useEffect(() => {
    dispatch(getCurrentSongAction(30706129))
  }, [dispatch])

  useEffect(() => {
    radioRef.current.src = getPlaySong(currentSong.id)
    radioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
  }, [currentSong])

  const radioRef = useRef();

  ///、逻辑代码
  //1.音乐播放
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = useCallback(() => {
    isPlaying ? radioRef.current.pause() : radioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  //2.播放时间
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime * 1000
    if (!isChanging) {
      setCurrentTime(currentTime)
      setProgress(currentTime / duration * 100)
      // console.log(e.target.currentTime)
    }

    //获取当前歌词
    let i = 0
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i];
      if (currentTime < lyricItem.time) {
        break;
      }
    }
    if (currentLyricIndex !== (i - 1)) {
      dispatch(changeCurrentLyricIndexAction(i - 1))
      const content = (lyricList[i - 1] && lyricList[i - 1].content) || "";
      if(isShow){
        message.destroy()
      }else{
        message.open({
          content: content,
          duration: 0,
          key: "lyric",
          className: "lyric-class"
        })
      }

    }
  }
  //3.控制播放
  const [isChanging, setIsChanging] = useState(false)
  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    const currentTime = value / 100 * duration
    setCurrentTime(currentTime)
    setProgress(value)
  }, [duration]);

  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000
    radioRef.current.currentTime = currentTime;
    // setCurrentTime(currentTime * 1000)
    setIsChanging(false)

    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic]);

  //改变播放模式
  const { sequence } = useSelector(state => ({
    sequence: state.getIn(["player", "sequence"])
  }))
  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))
  }

  //播放上一首、下一首
  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  //单曲循环
  const handleMusicEnded = () => {
    console.log("歌曲播放结束");
    if (sequence === 2) {
      radioRef.current.currentTime = 0;
      radioRef.current.play();
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  //控制播放器面板显示
  const [isShow,setIsShow] = useState(false)

  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isplaying={isPlaying}>
          <button className="sprite_player prev" onClick={e => { changeMusic(-1) }}></button>
          <button className="sprite_player play" onClick={e => { playMusic() }}></button>
          <button className="sprite_player next" onClick={e => { changeMusic(1) }}></button>
        </Control>
        <PlayInfo bg={getSizeImage(picUrl, 35)}>
          <div className="image">
            <NavLink to="/discover/player" id="img">
              {/* <img src={getSizeImage(picUrl, 35)} alt="" /> */}
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <a href="/abc" className="song-name">{currentSong.name}</a>
              <a href="/todo" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{formatDate(currentTime, "mm:ss")}</span>
                <span className="divider">/</span>
                <span className="duration">{formatDate(duration, "mm:ss")}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e => { changeSequence() }}></button>
            <button className="sprite_player btn playlist" onClick={e => { setIsShow(!isShow)}}>{ playList.length}</button>
          </div>
        </Operator>
        <audio ref={radioRef}
          onTimeUpdate={e => { timeUpdate(e) }}
          onEnded={e => { handleMusicEnded() }}>
        </audio>
        {
          isShow ? <MorePlayerPanel  onClick={e => { setIsShow(false)}} /> : null 
        }
      </div>
    </PlayerBarWrapper>
  )
})
