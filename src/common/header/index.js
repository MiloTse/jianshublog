import React, { Component, createRef } from 'react';
import '../../statics/iconfont/iconfont.css'; // 引入 iconfont.css
import { CSSTransition } from "react-transition-group";

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

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.nodeRef = createRef();
    }


    render() {
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
                        in={this.state.focused} 
                        timeout={200} 
                        classNames="slide"
                        nodeRef={this.nodeRef}>

                        <NavSearch
                            ref={this.nodeRef}
                            className={this.state.focused ? 'focused': ''}
                            onFocus={this.handleInputFocus}
                            onBlur={this.handleInputBlur}
                        >

                        </NavSearch>


                    </CSSTransition>

                    <span className={this.state.focused ? 'focused iconfont': 'iconfont'}>
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
        )
    }

    handleInputFocus(){
       this.setState(
           {
               focused: true
           }
       )
    }
    handleInputBlur(){
        this.setState(
            {
                focused: false
            }
        )
    }
}

export default Header;
