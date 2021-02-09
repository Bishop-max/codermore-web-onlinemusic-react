import styled from 'styled-components'

export const PlayerRelevantWrapper = styled.div`

  .songs{
    .song-item{
      margin-top:10px;
      display:flex;

      .txt{

        .song-name{
          a{
            color:#000;
          }
        }

        .singer-name{
          a{
            color:#999;
          }
        }

        .song-name,.singer-name{
          a{
            width:156px;
            display:block;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          }
        }
      }

      .opr{
        
        .item{
          display:inline-block;
          width:10px;
          height:11px;
          cursor: pointer;
        }

        .play{
          background-position:-69px -455px;
          margin-right:10px;
        }

        .add{
          background-position: -87px -454px;
        }
      }
    }
  }
`