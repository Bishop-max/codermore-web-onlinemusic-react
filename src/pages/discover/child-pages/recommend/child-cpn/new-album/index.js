import React, { memo, useEffect, useRef } from 'react'

import { NewAlbumWrapper } from './style'

import { getNewAlbumAction } from '../../store/actionCreators'

import MoreThemeHeader from '@/components/more-theme-header'
import MoreAlbumCover from '@/components/more-album-cover'

import { Carousel } from 'antd';

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

export default memo(function MoreNewAlbum() {

  //redux hooks
  const dispatch = useDispatch();
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbum"])
  }), shallowEqual)

  const pageRef = useRef();
  //其他 hooks
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  return (
    <NewAlbumWrapper>
      <MoreThemeHeader title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={() => { pageRef.current.prev() }}></button>
        <div className="album">
          <Carousel autoplay dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                        return (<MoreAlbumCover info={iten} key={iten.id} size={100} width={118} bgp="-570px" />)
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={() => { pageRef.current.next() }}></button>
      </div>
    </NewAlbumWrapper>
  )
})
