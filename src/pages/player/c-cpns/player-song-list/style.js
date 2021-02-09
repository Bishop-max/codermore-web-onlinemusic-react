import styled from 'styled-components'

export const PlayerSongListWrapper = styled.div`
  margin-bottom:40px;
  
  .similist-wrap{
      margin-top:15px;
      display:flex;
      justify-content:space-between;
      background-color: #fff;
      cursor: pointer;
      .left{
        width:50px;
        height:50px;

        img{
          width:50px;
          height:50px;
        }
      }

      .right{
        padding-left:10px;
        width:148px;
        .list-name{
          width:148px;
          display:block;
          font-size:14px;
          color:#000;
        }
        p{
          color:#999;
          margin-top:5px;
          .author{
            margin-left:3px;
            color:#666;
          }
        }
      }
    }
`