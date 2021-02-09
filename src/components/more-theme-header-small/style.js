import styled from 'styled-components'

export const ThemeHeaderSmallWrapper = styled.div`
    margin-top:15px;
    .small-wrap{
      display:flex;
      justify-content:space-between;
      background-color: #fafafa;
      cursor: pointer;
      .left{
        width:62px;
        height:62px;

        img{
          width:62px;
          height:62px;
        }
      }

      .right{
        padding-left:15px;
        width:148px;
        border-top:1px solid #e9e9e9;
        border-right:1px solid #e9e9e9;
        border-bottom:1px solid #e9e9e9;

        :hover{
          background-color: rgba(0,0,0,.03);
        }

        h4,p{
          padding-top:10px;
        }
        h4{
          font-size:14px;
          font-weight:700;
        }
        p{
          color:#666;
        }
      }
    }
`