import styled from 'styled-components'

export const PlayerInfoWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:50px;
`
export const InfoLeft = styled.div`
  width:206px;
  .image{
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
    width:198px;
    height:198px;
    
    img{
      width:130px;
      height:130px;
    }

    .cover{
      width:206px;
      height:205px;
      top:-4px;
      left:-4px;
      background-position:-140px -580px;
    }
  }

  .link{
    display:flex;
    justify-content:center;
    font-size:12px;
    margin:10px 0;
    i{
      width:16px;
      height:16px;
      background-position:-34px -863px;
    }
    a{
      color:#0B74BE;
      text-decoration:underline;
    }
  }
`

export const InfoRight = styled.div`
  width:414px;

  .hd{
    display: flex;
    line-height:24px;
    i {
      display:block;
      width: 54px;
      height: 24px;
      background-position: 0 -463px;
    }

    .title {
      font-size: 24px;
      margin-left: 10px;
    }
  }

  .singer,.label{
    margin:10px 0;
    color:#999999;

    a{
      color:#0C73C2;
    }
  }

  .lyric{
    margin-top:30px;
    height:auto;

    .lyric-info{
      p{
        margin:6px 0;
      }
    }
    .lyric-control{
      background-color: #fff;
      color:#0C73C2;
      cursor: pointer;
      position: relative;

      :hover{
        text-decoration:underline;
      }

      i{
        position: absolute;
        width:11px;
        height:8px;
        top:6px;
        right:-4px;
        background-position: ${props => props.isSpread ? "-45px" : "-65px"} -520px;
      }
    }
  }

  .user-operation{
    margin-top:48px;
    color:#999;
    text-align:right;
    a{
      margin-left:3px;
      text-decoration:underline;
    }
  }
  
`