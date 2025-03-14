import React, {PureComponent} from 'react';
import { connect} from "react-redux";
import {actionCreators} from "../home/store";
import {LoginBox, LoginWrapper, Input, Button} from "./style";

class Login extends PureComponent {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="Username"/>
                    <Input placeholder="Password"/>
                    <Button>Login</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}


const mapState = (state) => ({
 });



const mapDispatch = (dispatch) => ({

});


export default connect(mapState, mapDispatch)(Login);
















