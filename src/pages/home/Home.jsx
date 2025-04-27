import React, {PureComponent, useState} from "react";
import {
    BackToTop,
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import Topic from './component/Topic';
import ArticleList from './component/ArticleList';
import Recommend from './component/Recommend';
import RecommendedAuthors from './component/RecommendedAuthors';
import {connect} from "react-redux";
import { actionCreators } from './store'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
 import image01 from '../../assets/banner_01.png';
 import image02 from '../../assets/banner_02.png'
 import logoPic from '../../statics/logo.png'

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };
        //need to bind
        this.handleSlideChange = this.handleSlideChange.bind(this);
    }
     handleSlideChange(swiper) {
        this.setState({
            page: swiper.activeIndex + 1
        });
        console.log(swiper.activeIndex);
    }

    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <div className="swiper-area">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            onSlideChange={this.handleSlideChange}
                        >
                            <SwiperSlide>
                                <div className="swiper-item">
                                    <img className='banner-img' alt="banner"
                                         src={image01}/>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-item">
                                    <img className='banner-img' alt="banner"
                                         src={image02}/>

                                </div>
                            </SwiperSlide>

                        </Swiper>
                        <div className="pagination">{this.state.page}/2</div>

                    </div>

                    <Topic/>
                    <ArticleList/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <RecommendedAuthors/>
                </HomeRight>
                {this.props.showScroll ? <BackToTop onClick={this.handleScrollTop}>Back To Top</BackToTop> : null}

            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)

    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})



const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);//here action is not func not an obj
    },
    changeScrollTopShow(event){
        if(document.documentElement.scrollTop> 100){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
        // console.log(document.documentElement.scrollTop);
    }
})


export default connect(mapState,mapDispatch)(Home);
