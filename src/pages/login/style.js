import styled from 'styled-components'

export const LoginWrapper = styled.div`
  .phone-login{
    width:530px;
    min-height:220px;
    background-color: #fff;
    position:fixed;
    top: 363px;
    left: 50%;
    transform:translateX(-50%);
    z-index:9999;
    border-radius:4px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.8);

    .login-header{
      border-radius:4px 4px 0 0;
      height:39px;
      line-height:39px;
      font-weight:700;
      font-size:14px;
      padding-left:18px;
      color:#fff;
      background-color: #292929;

      .close{
        cursor: pointer;
        position:absolute;
        right:20px;
        top:15px;
        display:inline-block;
        width:10px;
        height:10px;
        background-position:0 -95px;
      }
    }

    .login-content{
    padding:0;
    color:#333;

    .login-form{
      width:220px;
      margin:0 auto;
      padding: 30px 0 43px;
      .phone-wrap,.pwd-wrap{
        border: 1px solid #cdcdcd;
        border-radius:2px;
        height:32px;
        line-height:30px;
        &>input{
          outline:none;
          width:100%;
          background-color: #fff;
        }
      }
      .phone-wrap{
        display:flex;

        select{
          background-color: #fff;
        }
      }

      .pwd-wrap{
          margin-top:10px;
        }
      .forget{
          margin-top:10px;
          display:flex;
          justify-content:space-between;
          .auto-login{
            &>input{
              margin-right:10px;
            }
          }
        }
      .login-btn{
          cursor: pointer;
          color:#fff;
          margin-top:20px;
          width:100%;
          height:31px;
          border-radius:4px;
          background-position:right -387px;

          :hover{
            background-position:right -469px;
          }
        }
      }
    }
    .other-way{
      display:flex;
      justify-content:space-between;
      border-top:1px solid #C6C6C6;
      height:49px;
      line-height:49px;
      .left{
        margin-left:15px;
        color:#0C72C3;
        cursor: pointer;
        :hover{
          text-decoration:underline;
        }
      }
      .right{
        margin-right:15px;
        color:#999;
        cursor: pointer;
        :hover{
          text-decoration:underline;
        }
      }
    }
  }

  

  
`