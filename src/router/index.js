
import MoreDiscover from '@/pages/discover';
import MoreFriend from '@/pages/friend';
import MoreMine from '@/pages/mine';
import { Redirect } from 'react-router-dom';

import Album from '@/pages/discover/child-pages/album'
import Recommend from '@/pages/discover/child-pages/recommend'
import Artist from '@/pages/discover/child-pages/artist'
import Djradio from '@/pages/discover/child-pages/djradio'
import Toplist from '@/pages/discover/child-pages/toplist'
import Playlist from '@/pages/discover/child-pages/playlist'

import PlayerPage from '@/pages/player'

const routes = [
  {
    path:"/",
    exact:true,
    render:() =>{
      return <Redirect to="/discover"/>
    }
  },
  {
    path:"/discover",
    component:MoreDiscover,
    routes:[
      {
        path:"/discover",
        exact:true,
        render:() =>{
          return <Redirect to="/discover/recommend"/>
        }
      },
      {
      path:"/discover/recommend",
      component:Recommend
      },
      {
      path:"/discover/toplist",
      component:Toplist
      },
      {
      path:"/discover/playlist",
      component:Playlist
      },
      {
      path:"/discover/djradio",
      component:Djradio
      },
      {
      path:"/discover/artist",
      component:Artist
      },
      {
      path:"/discover/album",
      component:Album
      },
      {
        path:"/discover/player",
        component:PlayerPage
      }
    ]
  },
  {
    path:"/mine",
    component:MoreMine
  },
  {
    path:"/friend",
    component:MoreFriend
  },
]

export default routes