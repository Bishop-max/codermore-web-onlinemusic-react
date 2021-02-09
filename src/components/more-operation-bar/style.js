import styled from 'styled-components'

export const OperationBarWrapper = styled.div`
  display:flex;
  .play{
    display:flex;
    .play-icon{
      display:block;
      width:66px;
      height:30px;

      i{
        width:66px;
        height:30px;
        display:inline-block;
        background-position:0 -633px;
        position: relative;
        span{
          position: absolute;
          right:5px;
          top:6px;
          color:#fff;
        }

        :hover{
          background-position:0 -719px;
        }
      }
    }

    .add-icon{
      display:inline-block;
      width:31px;
      height:30px;
      border-left:1px solid #2F6BA5;
      background-position:-1px -1588px;

      :hover{
        background-position:-41px -1588px;
      }
    }
  }

  .item{
    display:block;
    height:31px;
    margin-left:5px;
    box-shadow:1px 0px 1px rgba(0,0,0,0.05);

    .icon{
      height:31px;
      line-height:31px;
      padding: 0 7px 0 28px;
      border-right:1px solid #D4D3D3;
      border-radius:4px;
      display:inline-block;
      position: relative;
      text-align:center;
      font-family:"宋体";
      color:#333;
      
    }
    .favor-icon {
      background-position: 0 -977px;

      :hover{
        background-position:0 -1063px;
      }
    }

    .share-icon {
      background-position: 0 -1225px;
      :hover{
        background-position:0 -1268px;
      }
    }

    .download-icon {
      background-position: 0 -2761px;
      :hover{
        background-position:0 -2805px;
      }
    }

    .comment-icon {
      background-position: 0 -1465px;
      :hover{
        background-position:0 -1508px;
      }
    }
  }
`