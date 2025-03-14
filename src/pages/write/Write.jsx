import React, {PureComponent} from 'react';
import { connect} from "react-redux";
 import { Navigate } from 'react-router-dom';

class Write extends PureComponent {
    render() {
        const {loginState} = this.props;
        //if login, jump to write page to write article
        if(loginState) {
            return (
             <div>Write Article Page</div>
            )
        }else {
            return <Navigate to='/login' replace={true} />
        }
    }
}

const mapState = (state) => ({
    loginState: state.getIn(['login', 'login'])
 });

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Write);
















