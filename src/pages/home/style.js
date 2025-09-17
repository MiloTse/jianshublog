import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
 
`;


export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;

    .swiper-area {
        position: relative;
        width: 625px;
        height: 270px;
    }

    .pagination {
        position: absolute;
        right: 300px;
        bottom: 10px;
        transform: none;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.3);
        color: #c3fef5;
        padding: 3px 3px;
        border-radius: 12px;
        font-size: 25px;
        line-height: 1;
    }

    .banner-img {
        width: 625px;
        height: 270px;
        object-fit: cover;
    }

    .swiper-item {
        position: relative;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;


export const TopicWrapper    = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdd;
`;

export const TopicItem    = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        margin-left: 2px;
        border-radius: 8px;
    }
`;


export const ListItem    = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo    = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
        margin-right: 2px; 
    }
`;

export const RecommendWrapper    = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem    = styled.div`
    width: 280px;
    height: 50px;
     background: url(${(props) => props.imgUrl});
    //background: url(${logoPic});
    background-size: contain;
`;


export const RecommendedAuthorsWrap = styled.div`
    margin-bottom: 20px;
`;

export const RecommendedAuthorsInfo = styled.div`
    margin: 0 0 20px;
`;

export const RecommendedAuthorsTitle = styled.div`
    font-size: 14px;
    color: #969696;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;


export const RecommendedAuthorsRefresh    = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
   display: block;
   float: left;
   font-size: 12px;
   margin-right: 2px;
   transition: all .2s ease-in;
   transform-origin: center center;
  }
`;
export const RecommendedAuthorsList = styled.ul`
    padding: 0;
    text-align: left;
    list-style: none;
    line-height: 20px;
    margin-top: 30px;
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
`;


export const RecommendedAuthorsItem = styled.li`
    margin-bottom: 15px;
    display: flex;
    align-items: flex-start;
    min-height: 47px;
    padding: 5px 0;
    .avatar {
        display: block;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 1px solid #ddd;
        }
    }
    .info {
        flex: 1;
        padding-top: 2px;
        .name {
            display: block;
            font-size: 14px;
            color: #333;
            margin-bottom: 5px;
            margin-top: 3px;
            text-decoration: none;
            line-height: 1.2;
        }
        p {
            margin: 0;
            font-size: 12px;
            color: #969696;
            line-height: 1.4;
            word-wrap: break-word;
        }
        .words {
            margin-bottom: 2px;
        }
        .likes {
            margin: 0;
        }
    }
    
    .follow {
        width: 50px;
        margin-left: 20px;
        font-size: 13px;
        color: #42c02e;
        text-align: right;
        padding-top: 2px;
        flex-shrink: 0;
        i {
            font-size: 13px;
            margin-right: 2px;
        }
    }
`;

export const SeeAllButton = styled.div`
    border: 1px solid #dcdcdc;
    width: 100%;
    height: 35px;
    
    left: 0;
    line-height: 35px;
    padding: 7px 7px 7px 12px;
    text-align: left;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 15px;
    &:hover {
        background-color: #eeeeee;
    }
`;

export const LoadMore    = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: rgba(30,144,255,0.15);
    text-align:center;
    border-radius: 20px;
    cursor: pointer;
`;


export const BackToTop    = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 90px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  
  .banner-slider {
    width: 100%;
    height: 300px;
  }
  
  .banner-img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  
  .slick-dots {
    bottom: 10px;
  }
  
  .slick-dots li button:before {
    color: white;
  }
`;




