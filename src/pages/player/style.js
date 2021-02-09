import styled from 'styled-components'

import cbg from '@/assets/img/wrap-bg.png'

export const PlayerWrapper = styled.div`
  
  .content{
    border-left:1px solid #D3D3D3;
    background:url(${cbg}) 100% 100% repeat-y;
    background-color: #fff;
    display:flex;
  }
`

export const PlayerLeft = styled.div`
  width:709px;
  padding:40px 30px 40px 39px;
`

export const PlayerRight = styled.div`
  width:270px;
  padding:20px 40px 40px 30px;
`