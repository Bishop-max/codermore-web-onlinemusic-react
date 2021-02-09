import styled from 'styled-components'

import playIcon from '@/assets/img/playlist_sprite.png'

export const PanelListWrapper = styled.div`
  width:553px;

  .list-item{
    margin-left:25px;
    height:28;
    line-height:28px;
    display:flex;
    justify-content:space-between;
    color:#ccc;
    position: relative;
    cursor: pointer;

    .left{
      width:345px;
    }

    &.active{
      color:#fff;
      background-color: #0D0C0B;
      .right{
        .duration{
        color:#fff;
        }
      }
      ::before{
        content:"";
        position:absolute;
        left:-15px;
        top:8px;
        width:10px;
        height:13px;
        background:url(${playIcon}) -182px 0;
      }
    }

    .right{
      display:flex;
      span{
        display:block;
      }
      .singer{
        width:80px;
        :hover{
          text-decoration:underline;
        }
      }
      .duration{
        width:45px;
        color:#666;
      }
      .link{
        width:43px;
        text-align:center;
        .link-icon{
          vertical-align:middle;
          display:inline-block;
          width:14px;
          height:16px;
          background-position:-80px 0px;
        }
      }
      .link:hover{
        .link-icon{
          background-position:-80px -20px;
        }
      }
    }
    
  }
`