import React, { memo } from 'react';
import { RecommendWrapper,Content,RecommendLeft,RecommendRight } from './style';

import TopBanner from './child-cpn/top-banner';
import HotRecommend from './child-cpn/hot-recommend';
import NewAlbum from './child-cpn/new-album';
import RecommendRank from './child-cpn/recommend-rank'
import HotAnchor from './child-cpn/hot-anchor'
import SettleSinger from './child-cpn/settle-singer'
import UserLogin from './child-cpn/user-login'

export default memo(function MoreRecommend(props){


  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <RecommendRank></RecommendRank>
        </RecommendLeft>
        <RecommendRight>
          <UserLogin></UserLogin>
          <SettleSinger></SettleSinger>
          <HotAnchor></HotAnchor>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

// function MoreRecommend(props) {

//   const { getTopBanners, banner } = props

//   useEffect(() => {
//     getTopBanners()
//   }, [getTopBanners])

//   return (
//     <div>
//       <h1>MoreRecommend{banner.length}</h1>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   banner: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getTopBanners: function () {
//     dispatch(getTopBannersAction)
//   }
// })


// export default connect(mapStateToProps, mapDispatchToProps)(memo(MoreRecommend))