import styled from 'styled-components'

export const PlayerPanelWrapper = styled.div`
  position:absolute;
  width:986px;
  height:301px;
  bottom:47px;
  left:50%;
  transform:translateX(-50%);

  .main{
    display:flex;
    height:260px;
    position: relative;
    overflow:hidden;
    background-position:-1014px 0;
    background-repeat: repeat-y;

    .image{
      position: absolute;
      left: 2px;
      top: -360px;
      width: 980px;
      height: auto;
      opacity: .2;
    }

    .line{
      display:inline-block;
      height:260px;
      border-right:5px solid #0C0B0A;
      border-left:5px solid #0C0B0A;
    }
  }
`
