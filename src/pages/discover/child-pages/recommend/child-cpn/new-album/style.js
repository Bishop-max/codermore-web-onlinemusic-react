import styled from 'styled-components';

export const NewAlbumWrapper = styled.div`

    .content{
        margin-top:30px;
        display:flex;
        height:184px;
        width:687PX;
        background-color: #f5f5f5;
        border:1px solid #d3d3d3;
        align-items:center;

        .arrow{
            width:17px;
            height:17px;
            cursor: pointer;
        }

        .arrow-left{
            background-position: -260px -75px;
        }

        .arrow-right{
            background-position: -300px -75px;
        }

        .album{
            width:645px;
            height:182px;
            padding-left:5px;
            align-items:center;

            /* .ant-carousel .slick-slide {
                height: 150px;
                overflow: hidden;
            } */

            .page{
                display:flex !important;
                justify-content:space-between;
                align-items:center;
            }
        }
    }
`