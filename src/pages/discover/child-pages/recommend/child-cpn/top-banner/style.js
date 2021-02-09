import styled from 'styled-components'
import banner from '@/assets/img/download.png'
import btn from '@/assets/img/banner_sprite.png'

export const BannerWrapper = styled.div`
  
  background:url(${props => props.bgImg}) center/6000px;

  .banner{
    position:relative;
    height:270px;
  }
`

export const BannerLeft = styled.div`
    width:730px;
    .banner-slef{
      cursor: pointer;
    }

    .banner-item{
      overflow:hidden;
      height:270px;

      img{
        width:100%;
      }
    }
`

export const BannerRight = styled.a.attrs({
  herf:"https://music.163.com/#/download",
  target:"_blank"
})`
  display:block;
  position:absolute;
  top:0px;
  right:1px;
  width:250px;
  height:270px;
  background:url(${banner});
`

export const BannerControl = styled.div`
  position: absolute;
  left:0px;
  right:0px;
  top:50%;
  margin-top:-31px;

  .btn{
    position:absolute;
    width:37px;
    height:63px;
    background:url(${btn});
    background-color: transparent;
    cursor:pointer;

    &:hover{
    background-color: rgba(0,0,0,.1);
  }
  }


  .left{
    left:-68px;
    background-position:0 -360px;
  }
  .right{
    right:-68px;
    background-position:0 -508px;
  }

`