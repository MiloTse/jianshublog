import React, { useRef } from 'react';
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
    Addition,
    Button
} from "./style";


const Header = (props) => {
    const nodeRef = useRef(null);

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
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                        nodeRef={nodeRef}
                    >
                        <NavSearch
                            ref={nodeRef}
                            className={props.focused ? 'focused': ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>

                    <span className={props.focused ? 'focused iconfont': 'iconfont'}>
                        &#xe633;
                    </span>
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


const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
           console.log('focus');
           const action = actionCreators.searchFocus();
           dispatch(action);
        },
        handleInputBlur() {
            console.log('blur');
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
