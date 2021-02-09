import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  padding:0 20px;
  .anchor-wrap{
    
    .anchor-top{
      font-weight:700;
      border-bottom:1px solid #c3c3c3;
    }

    .anchor-list{
      
      .list-item{
        display:flex;
        margin-top:15px;
        a{
          display:block;
          width:40px;
          height:40px;

          img{
            width:40px;
            height:40px;
          }
        }

        .item-info{
          padding-left:15px;
          width:160px;

          .name,.info{
            padding-top:2px;
          }
          .info{
            color:#666;
          }
        }
      }
    }
  }
`