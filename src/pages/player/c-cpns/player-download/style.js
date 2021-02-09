import styled from 'styled-components'

export const PlayerDownloadWrapper = styled.div`
    margin-top:30px;

    .download-icon{
      margin:20px 0;
      height:65px;
      display:flex;
      justify-content:space-between;

      a{
        display:block;
      }
      .iphone{
        width:42px;
        height:48px;
        background-position:0 -392px;
        :hover{
          background-position:0 -472px;
        }
      }
      .pc{
        width:60px;
        height:48px;
        background-position:-72px -392px;
        :hover{
          background-position:-72px -472px;
        }
      }
      .android{
        width:42px;
        height:48px;
        background-position:-158px -392px;
        :hover{
          background-position:-158px -472px;
        }
      }
    }

    .sec{
      color:#999;
      margin-bottom:40px;
    }

    a{
      color:#333;
    }
`