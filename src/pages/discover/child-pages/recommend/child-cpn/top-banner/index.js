import React, { memo, useCallback, useEffect, useRef,useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannersAction } from './../../store/actionCreators'

import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

import { Carousel } from 'antd'


export default memo(function MoreTopBanner() {


  // const { getTopBanners, banner } = props

  //redux hook的使用
  //render刷新后 state返回的对象不是通过浅拷贝进行比较的，而是通过 ‘==’ 进行比较的。每次返回的对象的地址肯定不相同
  //shallowEqual 浅层比较函数，传入该函数,到时候state返回的对象就会通过浅层比较来判断
  const { banners } = useSelector(state => ({
    // banners:state.recommend.topBanners
    banners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopBannersAction)
  }, [dispatch])

  //获取ref
  const bannerRef = useRef();

  //其他业务
  const [currentIndex,setCurrentIndex] = useState(0);

  const bannerChange = useCallback((from,to) =>{
    // console.log(to);
    setTimeout(() => {
      setCurrentIndex(to)
    }, 0);
  },[])

  const bgImg = banners[currentIndex] && (banners[currentIndex].imageUrl + "?imageView&blur=40x20")


  return (
    <BannerWrapper bgImg={bgImg} className="blured">
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel className="banner-slef" effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              banners.map((item,index) =>{
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.typeTitle}/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={ () => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={() => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
