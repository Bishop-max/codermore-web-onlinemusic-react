import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
  width: ${props => props.width + "px"};

  .album-image{
    margin-top:20px;
    position:relative;
    width:${props => props.width + "px"};
    height:${props => props.size + "px"};

    &>img{
      width:${props => props.size + "px"};
      height:${props => props.size + "px"};
    }

    .cover{
      position:absolute;
      left:0;
      right:0;
      top:0;
      bottom:0;
      background-position:0 ${props => props.bgp};
    }

    &:hover{
      .play{
      display:block;
      position:absolute;
      bottom:5px;
      right:22px;
      width:25px;
      height:25px;
      background-position:-43px -53px;
      cursor: pointer;
      }
    } 
  }
  
  .album-info{
      margin-top:5px;
      width:${props => props.size + "px"};
      font-size:12px;

      .name{
        color:#000;
        &:hover{
        text-decoration:underline;
        cursor: pointer;
        }
      }
      .artist{
        color:#666;
        &:hover{
        text-decoration:underline;
        cursor: pointer;
        }
      }
    }
`