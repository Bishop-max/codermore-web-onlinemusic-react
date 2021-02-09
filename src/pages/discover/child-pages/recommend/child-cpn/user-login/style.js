import styled from 'styled-components'

import bg from '@/assets/img/sprite_02.png'

export const UserLoginWrapper = styled.div`

  .logined{
    height:185px;
    padding-top: 20px;
    background-position: 0 -270px;
    .login-top{
      height:90px;
      /* background-color: red; */
      display:flex;
      padding-top:2px;
      .image{
        padding:2px;
        margin-left:20px;
        width:86px;
        height:86px;
        border:1px solid #dadada;
        background-color: #fff;
        img{
          width:80px;
          height:80px;
        }
      }
      .info{
        margin-left:18px;
        width:115px;
        .username{
          width:auto;
          max-width:100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size:14px;
          font-weight:700;
          height:19px;
          line-height:19px;
          cursor: pointer;
          :hover{
            text-decoration:underline;
          }
        }
        .level{
          margin-top:5px;
          .level-icon{
            display:block;
            width:74px;
            height:17px;
            background-position:-130px -64px;
            text-align:center;
            font-style:italic;
            font-weight:700;
            color:#999;
            cursor: pointer;
            :hover{
              color:#797878;
              background-position:-130px -84px;
            }
          }
        }
        .btn{
          margin-top:10px;
          i{
            border-radius:5px;
            text-align:center;
            display:block;
            width:80px;
            height:31px;
            line-height:31px;
            color:#fff;
            cursor: pointer;
            background-position:0 -387px;
            :hover{
              background-position:0 -469px;
            }
          }
        }
      }
    }
    .login-bottom{
      margin:22px 0 0 20px;
      display:flex;
      .item{
        border-right:1px solid #e4e4e4;
        color:#666;
        cursor: pointer;
        :hover{
          color:#0C73C2;
        }
        p{
          font-size:18px;
        }
        :last-child{
          border:none;
        }
        &.event{
          padding-right:18px;
        }
        &.follow{
          padding:0 18px;
        }
        &.fan{
          padding-left:18px;
        }
      }
    }
  }

  .un-login{
    height:126px;
    background: url(${bg}) 0 0 ;
    .note{
    width:205px;
    margin:0 auto;
    padding:16px 0;
    line-height:22px;
    }

    .btn{
      color:#fff;
      margin: 0 auto;
      display:block;
      width:100px;
      height:31px;
      line-height:31px;
      text-align:center;
      background-position: 0px -195px;
      text-decoration:none;

      :hover{
        cursor: pointer;
        background-position: -110px -195px;
      }
    }
  }

  
`