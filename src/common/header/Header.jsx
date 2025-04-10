import React, { Component } from 'react';
import '../../statics/iconfont/iconfont.css'; // 引入 iconfont.css
import { CSSTransition } from "react-transition-group";
import {connect} from "react-redux";
import {actionCreators } from './store/';
import {Link} from 'react-router-dom';
import {actionCreators as loginActionCreators} from '../../pages/login/store';
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
import {logout} from "../../pages/login/store/actionCreators";

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
                        Hot Search
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                            Refresh
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
        const { focused,handleInputFocus, handleInputBlur, list, login, logout } = this.props;

        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <Link to='/'> <NavItem className='left active' >Home</NavItem></Link>
                    <NavItem className='left'>Download App</NavItem>
                    <NavItem className='left'>Member</NavItem>
                    <NavItem className='left'>IT Tech</NavItem>
                    {
                    login ?
                        <NavItem  className='right' onClick={logout}>Logout</NavItem> :
                        <Link to='/login'><NavItem className='right'>Login</NavItem></Link>
                    }

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
                                onFocus={()=>handleInputFocus(list)}
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
                    <Link to='/write'>
                        <Button className='writting'>
                            <span className="iconfont">&#xe629;</span>
                            Write
                        </Button>
                    </Link>

                    <Button className='reg'>Register</Button>
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
        mouseIn: state.getIn(['header', 'mouseIn']),//fetch page from Header
        login: state.getIn(['login', 'login'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            console.log(list);
            (list.size === 0) && dispatch(actionCreators.getList());

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
            let originalAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if (originalAngle) {
                originalAngle = parseInt(originalAngle, 10);
            }else{
                originalAngle = 0;
            }
            spin.style.transform = 'rotate('+ (originalAngle+360) +'deg)';
            console.log(spin.style.transform);
            if(page< totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                //restore to the first page if over totalPage
                dispatch(actionCreators.changePage(1));
            }
            console.log(page, totalPage);
         },
        logout() {
            dispatch(loginActionCreators.logout());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
