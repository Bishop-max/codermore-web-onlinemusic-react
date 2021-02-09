import styled from 'styled-components'

export const PanelHeaderWrapper = styled.div`
  display:flex;
  height:41px;
  background-position:0 0 ;
`

export const PanelHeaderLeft = styled.div`
  display:flex;
  justify-content:space-between;
  width:553px;
  h3{
    line-height:39px;
    margin-left:25px;
    font-weight:700;
    color:#e2e2e2;
  }

  .opr{
    height:39px;
    line-height:39px;
    margin-right:10px;
    button{
      background-color: transparent;
      color:#ccc;
      :hover{
        color:#e2e2e2;
        cursor: pointer;
        text-decoration:underline;
      }

      .favor-all-icon{
        display:inline-block;
        width:16px;
        height:16px;
        vertical-align:middle;
        margin-right:6px;
        background-position:-24px 0px;
      }
      .clear-icon{
        display:inline-block;
        margin-right:6px;
        vertical-align:middle;
        width:13px;
        height:16px;
        background-position:-51px 0;
      }
    }
    .favor-all:hover{
      .favor-all-icon{
        background-position: -24px -20px;
      }
    }
    .clear:hover{
        .clear-icon{
          background-position:-51px -20px;
        }
      }
    .line{
      display:inline-block;
      vertical-align:middle;
      height:15px;
      border-left:1px solid #000;
      border-right:1px solid #2c2c2c;
    }
  }
  
`

export const PanelHeaderRight = styled.div`
  position:relative;
  flex:1;
  p{
    margin:0 auto;
    width:346px;
    text-align:center;
    line-height:39px;
    font-size:14px;
    color:#fff;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
  }

  .close{
    position:absolute;
    right:10px;
    top:5px;
    width:30px;
    height:30px;
    display:inline-block;
    cursor: pointer;
    background-position:-195px 9px;
    :hover{
      background-position:-195px -21px;
    }
  }
`