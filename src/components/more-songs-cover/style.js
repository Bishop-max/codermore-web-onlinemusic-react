import styled from 'styled-components';

export const SongsCoverWrapper = styled.div`
  width:140px;
  padding-bottom:30px;
  .cover-top{
    position:relative;

    &>img{
      width:140px;
      height:140px;
    }

    .cover{
      position:absolute;
      left:0px;
      top:0px;
      height:100%;
      width:100%;
      background-position:0 0 ;
      cursor: pointer;
    
      .info{
        position:absolute;
        bottom:0px;
        left:0px;
        right:0px;
        padding:0 5px;
        display:flex;
        justify-content:space-between;
        color:#ccc;
        background-color: rgba(0,0,0,.5);
        border-top:1px solid #111;

        .erji{
          margin-right:5px;
          display:inline-block;
          width:14px;
          height:11px;
          background-position:0 -24px;
        }
        
        .play{
          display:inline-block;
          width:16px;
          height:17px;
          background-position:0 0;

          &:hover{
            background-position:0 -60px;
          }
        }
      }
    }
  }

  .cover-bottom{
    font-size:14px;
    color:#000;
    margin-top:5px
  }

  .cover-source{
    color:#666;
  }

`