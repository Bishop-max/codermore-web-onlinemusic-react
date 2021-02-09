import styled from 'styled-components'

export const DiscoverWrapper = styled.div` 
  .top{
    background-color: #C20C0C;
  }

`
export const DiscoverTop = styled.div`  
    height:30px;
    display:flex;
    padding-left:170px;

    a{
      height:20px;
      line-height:20px;
      color:#fff;
      display:block;
      padding:0px 20px;
      margin:2px 20px;

      &:hover,&.active {
        background-color: #9B0909;
        text-decoration:none;
        border-radius:16px;
      }
    }

`