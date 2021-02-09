import styled from 'styled-components'

export const SelfCommentWrapper = styled.div`
  .self-comment{
    display:flex;
    margin:20px 0 30px 0px;
    .avator{
      img{
        width:50px;
        height:50px;
      }
    }
    .comment-info{
      margin-left:20px;
      width:100%;

      .comment-bottom{
        display:flex;
        justify-content:space-between;
        margin-top:10px;
        .comment-bottom-left{
          display:flex;
          .btn{
            width:18px;
            height:18px;
            margin-left:10px;
            cursor: pointer;
          }
          .emoji{
            background-position:-40px -490px;
          }
          .at{
            background-position:-60px -490px;
          }
        }
        .commment-bottom-right{
          display:flex;
          span{
            margin-right:10px;
            color:#999;
          }
          .comment-button{
            color:#fff;
            width:46px;
            height:25px;
            background-position:-84px -64px;
            cursor: pointer;
            :hover{
              background-position:-84px -94px;
            }
          }
        }
      }
    }
  }
`