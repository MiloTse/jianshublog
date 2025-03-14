import React ,{ Component} from "react";
import { DetailWrapper, DetailHeader, Content} from './style';
import articleImage from '../../statics/article_pic/01.jpeg';

class Detail extends Component {

  
    render() {
        return (
            <DetailWrapper>
                <DetailHeader>Detail Page XXX title</DetailHeader>
                <Content>
                    <img src={articleImage} alt="article"/>
                    <p><b>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，
                        这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人
                        上好高中越来越艰难的尴尬处境。</b></p>
                    <p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，
                        这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人
                        上好高中越来越艰难的尴尬处境。</p>
                    <p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，
                        这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人
                        上好高中越来越艰难的尴尬处境。</p>
                    <p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，
                        这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人
                        上好高中越来越艰难的尴尬处境。</p>
                </Content>
            </DetailWrapper>
        )
    }
}

export default Detail;
