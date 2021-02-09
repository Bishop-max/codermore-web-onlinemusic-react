import styled from 'styled-components'

export const LyricPanelWrapper = styled.div`
  flex:1;
  overflow:scroll;

  &::-webkit-scrollbar{
    display:none;
  }
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;

  .lyric-item{
    text-align:center;
    height:32px;
    line-height:32px;
    color:#989898;

    &.active{
      color:#fff;
      font-size:14px;
    }
  }
`