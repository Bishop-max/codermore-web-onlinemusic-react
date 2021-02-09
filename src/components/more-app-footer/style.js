import styled from 'styled-components'
import footer from '@/assets/img/sprite_footer_02.png'
import footertitle from '@/assets/img/sprite_footer_01.png'

export const FooterWrapper = styled.div`
  height:173px;
  background-color: #f2f2f2;
  border-top:1px solid #d3d3d3;
  font-size:12px;
  color:#333;

  .content{
    display:flex;
    width:980px;
    margin:0 auto;
    justify-content:space-between;
    align-items:center;
  }
`

export const FooterLeft = styled.div`
  padding-top:15px;
  line-height:24px;
  width:520px;



  .line{
    margin: 0 8px 0 10px;
    color: #c2c2c2;
  }

  .copyright span,.report span,.info span{
    margin-right:14px
  }
`

export const FooterRight = styled.ul`
  margin-top:33px;
  display:flex;
  
  .item{
    align-items:center;
    display:flex;
    flex-direction:column;
    margin-right:40px;
    
    .link{
      display:block;
      width:50px;
      height:45px;

      background-image:url(${footer});
      background-size:110px 450px;
    }

    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(3) .link {
      background-position: -60px -50px;
    }
    :nth-child(4) .link {
      background-position: 0 -101px;
    }

    .title{
      display: block;
      width: 52px;
      height: 10px;
      margin-top:6px;

      background-image:url(${footertitle});
      background-size:180px 100px;
    }

    :nth-child(1) .title {
      background-position: -1px -90px;
    }
    :nth-child(2) .title {
      background-position: 0 0;
    }
    :nth-child(3) .title {
      background-position: 0 -54px;
    }
    :nth-child(4) .title {
      background-position: -1px -72px;
    }
  }
`