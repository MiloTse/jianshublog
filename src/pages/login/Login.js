import React, {PureComponent} from 'react';
import { connect} from "react-redux";
import {actionCreators} from "../home/store";
import {LoginBox, LoginWrapper, Input, Button} from "./style";

class Login extends PureComponent {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="Username" ref={(input)=> {this.account = input}}/>
                    <Input placeholder="Password" type="password" ref={(input)=> {this.password = input}}/>
                    <Button onClick={() => this.props.login(this.account, this.password) }>Login</Button>
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
















