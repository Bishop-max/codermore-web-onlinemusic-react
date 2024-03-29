import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height:33px;
  border-bottom:2px solid #C10D0C;
  padding:0px 10px 0px 34px;
  background-position:-225px -156px;

  display:flex;
  justify-content:space-between;
  align-items:center;

  .left{
    display:flex;
    align-items:center;

    .title{
      font-size:20px;
      margin-right:20px;
    }

    .keyword{
    display:flex;

    .item{
      .divider{
        margin:0px 15px;
        color:#ccc;
        }
      }
    }
  }

  .right{
    display:flex;
    align-items:center;

    .icon{
      display:inline-block;
      width:12px;
      height:12px;
      margin-left:4px;
      background-position:0 -240px;
    }
  }
  
`