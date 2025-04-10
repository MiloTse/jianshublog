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
    .banner-img {
        width: 625px;
        height: 270px;
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


export const RecommendedAuthorsWrap    = styled.div`
    display: block;
    unicode-bidi: isolate;
    box-sizing: border-box;
     padding-top: 56px !important;
    color: rgb(51, 51, 51);
     background-color: #fff;
    font-size: 17px;
    height: 334px;
    width: 280px;
    line-height: 24px;
  

`;

export const RecommendedAuthorsInfo  = styled.div`
    text-align:left;
   .list {
      margin: 0 0 20px;
      text-align: left;
      list-style: none;
        .avatar {
          display: block;
          float: left;
          width: 3px;
          height: 3px;
          margin-right: 10px;
          margin-left: 2px;
          border-radius: 8px;
       }
   }
 
 
 `;
export const RecommendedAuthorsTitle    = styled.div`
    text-align:left;
 
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

export const RecommendedAuthorsList    = styled.ul`
 margin: 0 0 20px;
 text-align: left;
 list-style: none;
`;

export const RecommendedAuthorsItem = styled.li`
    margin-top: 15px;
    line-height: 20px;
 
    .avatar {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        
        img {
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    
    .info {
        padding-top: 5px;
        margin-right: 60px;
        
        .name {
            padding-top: 5px;
            font-size: 14px;
            color: #333;
        }
        
        p {
            margin-top: 2px;
            font-size: 12px;
            color: #969696;
        }
    }
    
    .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        
        i {
            font-size: 12px;
            margin-right: 2px;
        }
    }
    
    &:after {
        content: "";
        display: block;
        clear: both;
    }

`;

export const SeeAllButton    = styled.div`
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
`;

export const LoadMore    = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
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




