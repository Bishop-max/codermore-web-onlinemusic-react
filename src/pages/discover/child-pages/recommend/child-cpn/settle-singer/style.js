import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  margin-top:15px;
  padding:0px 20px;
  .content{
    .singer-top{
      display:flex;
      justify-content:space-between;
      border-bottom:1px solid #ccc;

      span{
        font-weight:900;
      }
    }

    .singer-bottom{
      margin:15px 0px;
      font-weight:700;
      a{
        color:#000;
        font-weight:900px;
        text-decoration:none;
        display:block;
        text-align:center;
        line-height:31px;
        height:31px;
        border:1px solid #c3c3c3;
        border-radius:5px;
        background-color: rgb(252,252,252);
        box-shadow: 0px -15px 15px 3px rgba(0,0,0,.06) inset;

        :hover{
          background-color: rgb(255,255,255);
          box-shadow: 0px -15px 15px 3px rgba(0,0,0,.03) inset;
        }
      }
    }
  }

`