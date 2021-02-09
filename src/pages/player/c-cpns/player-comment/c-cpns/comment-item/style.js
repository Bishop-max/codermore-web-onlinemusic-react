import styled from 'styled-components'

export const CommentItemWrapper = styled.div`
  .nc-comment-item{
      padding:20px 0 20px 0;
      display:flex;
      border-top: ${props => props.tag === 0 ? "none" : "1px dotted #ccc"};

      .avator{
        img{
          width:50px;
          height:50px;
        }
      }
      .item-info{
        width:100%;
        margin-left:10px;
        .info-top{
          .user-name{
            color:#0c73c2;
            padding:0 5px;
          }
        }
        .info-bottom{
          margin-top:15px;
          display:flex;
          justify-content:space-between;
          .date{
            color:#999;
          }
          .reply{
            .btn{
              background-color: #fff;
              :hover{
                cursor: pointer;
                text-decoration:underline;
              }
            }

            .support{
              .support-icon{
                margin-right:5px;
                vertical-align:-2px;
                width:15px;
                height:14px;
                display:inline-block;
                background-position:-150px -0px;
              }
            }

            .support:hover{
              .support-icon{
                background-position:-150px -20px;
              }
            }

            span{
              color:#999;
            }

            .reply{
              color:#666;
            }
          }
        }
      }
    }
    
`