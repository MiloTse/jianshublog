import React, { Component} from 'react';
import '../../statics/iconfont/iconfont.css'; // 引入 iconfont.css

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
                    <NavSearch>

                    </NavSearch>
                    <span className="iconfont">&#xe633;</span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'>
                    写文章
                    <span className="iconfont">&#xe629;</span>
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>)
    }
}

export default Header;
