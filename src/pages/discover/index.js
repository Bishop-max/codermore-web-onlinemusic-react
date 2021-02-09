import React, { memo,useEffect} from 'react'

import {renderRoutes} from 'react-router-config'

import {getLoginInfo} from '@/network/login'

import { discoverMenu } from '@/common/local-data'
import { DiscoverTop, DiscoverWrapper } from './style'
import { NavLink } from 'react-router-dom'

export default memo(function MoreDiscover(props) {

  // useEffect(() =>{
  //   const phone = "15289838784"
  //   const pwd = "mhqxhmhq1314"
  //   getLoginInfo(phone,pwd).then(res =>{
  //     console.log(res);
  //   })
  // })

  const {route} = props;

  return (
    <DiscoverWrapper>
      <div className="top">
        <DiscoverTop className="wrap-v1">
          {
            discoverMenu.map((item, index) => {
              return <NavLink key={item.title} to={item.link}>{ item.title }</NavLink>
            })
          }
        </DiscoverTop>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
