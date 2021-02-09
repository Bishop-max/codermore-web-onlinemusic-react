import styled from 'styled-components';

export const TopRankingWrapper = styled.div`
  flex:1;
  /* margin-left:5px; */

  .header{
    height:100px;
    display:flex;

    margin:20px 0 0 19px;

    .image{
      width:80px;
      height:80px;
      position:relative;

      img{
        width:80px;
        height:80px;
      }
    }

    .info{
      margin:5px 0 0 10px;
      a{
        font-size:14px;
        font-weight:900;
        color:#333;
      }

      .btn{
        display:inline-block;
        width:22px;
        height:22px;
        margin:8px 10px 0 0;
        cursor: pointer;
      }
      .play{
        background-position:-267px -205px;

        &:hover{
          background-position:-267px -235px;
        }
      }
      .favor{
        background-position:-300px -205px;
        &:hover{
          background-position:-300px -235px;
        }
      }
    }
  }

  .list{

    .list-item{
      position:relative;
      display:flex;
      align-items:center;
      height:32px;

      :nth-child(-n+3) .rank{
        color:#c10d0c;
      }

      .rank{
        width:35px;
        text-align:center;
        font-size:16px;
      }
      .info{
        color:#000;
        width:170px;
        height:17px;
        line-height:17px;
        display:flex;
        justify-content:space-between;

        .name{
          flex:1;
        }
        .operate{
          display:flex;
          align-items:center;
          display:none;
          width:82px;

          .btn{
            width:17px;
            height:17px;
            margin-left:8px;
            cursor: pointer;
          }
          .play{
            background-position:-267px -268px;
            &:hover{
              background-position:-267px -288px;
            }
          }
          .addto{
            position:relative;
            top:2px;
            background-position:0 -700px;
            &:hover{
              background-position:-22px -700px;
            }
          }
          .favor{
            background-position:-297px -268px;
            &:hover{
              background-position:-297px -288px;
            }
          }
        }
      }
      &:hover{
        .operate{
          display:inline-block;
        }
      }
    }
  }
  .footer{
    height:32px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    margin-right:10px;

    a{
      color:#000;
    }
  }
`