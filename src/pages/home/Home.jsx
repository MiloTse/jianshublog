import React ,{ PureComponent} from "react";
import {
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
import { BackToTop } from './style'


class Home extends PureComponent {
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt="banner" src="https://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip/imageView2/1/w/1250/h/540"/>
                    <Topic />
                    <ArticleList />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <RecommendedAuthors />
                </HomeRight>
                {this.props.showScroll ?  <BackToTop onClick={this.handleScrollTop}>Back To Top</BackToTop> : null}

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

    bindEvents(){
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
