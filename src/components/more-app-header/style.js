import styled from 'styled-components'
import head from '@/assets/img/sprite_01.png'

export const HeaderWrapper = styled.div`
  height:75px;
  background-color: #242424;
  .content{
    height:70px;
    display:flex;
    justify-content:space-between;
  }
  .divider{
    height:5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`

  display:flex;

  .logo{
    display:inline-block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }

  .select-list{
    display:flex;
    line-height:70px;
    font-size:14px;

    .select-item{
      position:relative;

      a{
        display:block;
        padding:0 20px;
        color:#ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${head});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

       &:hover a,a.active {
         color: #fff;
         background: #000;
         text-decoration: none;
        }
        .active .icon{
          position:absolute;
          bottom: -1px;
          width: 12px;
          height: 7px;
          left:50%;
          transform:translate(-50%);
          background-position: -226px 0;
        }
  }
  }

`

export const HeaderRight = styled.div`
  display:flex;
  align-items: center;
  color:#ccc;

  .search{
    margin:auto;
    border-radius:32px;
    width:158px;

    input{
      &::placeholder{
      font-size:12px;
      }
    }
  }

  .center{
    margin:0 12px;
    width:90px;
    height:32px;
    line-height:32px;
    text-align:center;
    border:1px solid #4F4F4F;
    border-radius:20px;

    &:hover {
      border:1px solid #fff;
    }
  }

  .login{
    cursor: pointer;
    &:hover {
      text-decoration:underline;
    }
  }

  .user-avator{
    .image{
      width:30px;
      height:30px;
      cursor: pointer;
      .avator{
        border-radius:15px;
        width:30px;
        height:30px;
      }
    }
  }

`