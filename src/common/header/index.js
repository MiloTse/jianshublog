import React, { Component } from 'react';
import '../../statics/iconfont/iconfont.css'; // 引入 iconfont.css
import { CSSTransition } from "react-transition-group";
import {connect} from "react-redux";
import {actionCreators } from './store/';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from "./style";

class Header extends Component{
    constructor(props) {
        super(props);
        this.searchRef = React.createRef();
    }

    getListArea () {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        //list is immutable, cannot use list[i] to get data in <SearchInfoItem> element
        //use toJS() function to convert immutable list to a normal list
        const newList = list.toJS();
        const pageList = [];
        //set a condition to check if newList is not empty, avoiding undefined at the beginning
        if (newList.length) {
            //can define page as 0. page start index should at 0
            const start = (page - 1) * 10;
            const end = Math.min(page * 10, newList.length);
            
            for (let i = start; i < end; i++) {
                if (newList[i]) {
                    pageList.push(
                        <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }

    }

    render() {
        const { focused,handleInputFocus, handleInputBlur } = this.props;

        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                            nodeRef={this.searchRef}
                        >
                            <NavSearch
                                ref={el => this.searchRef = el}
                                className={focused ? 'focused': ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>

                        <span className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>
                        &#xe633;
                    </span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        写文章
                        <span className="iconfont">&#xe629;</span>
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),//fetch page from Header
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])//fetch page from Header
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            spin.style.transform = 'rotate(360deg)';
            console.log(spin.style.transform);
            if(page< totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                //restore to the first page if over totalPage
                dispatch(actionCreators.changePage(1));
            }
            console.log(page, totalPage);
         }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
