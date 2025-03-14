import React, {PureComponent} from 'react';
import { connect} from "react-redux";
import { actionCreators } from "./store";
import {LoginBox, LoginWrapper, Input, Button} from "./style";
import { Navigate } from 'react-router-dom';

class Login extends PureComponent {
    render() {
        const {loginState} = this.props;
        //if not login, return login page
        if(!loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="Username" ref={(input)=> {this.account = input}}/>
                        <Input placeholder="Password" type="password" ref={(input)=> {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.password) }>Login</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else {
            return <Navigate to='/' replace={true} />
        }
    }
}

const mapState = (state) => ({
    loginState: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        console.log(accountElem.value, passwordElem.value);
        dispatch(actionCreators.login(accountElem, passwordElem));
    }
});

export default connect(mapState, mapDispatch)(Login);
















