import * as constants from './constants';
import axios from 'axios';

export const logout  = () => ({
    type: constants.LOGOUT,
    value: false
})


export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account.value + '&password=' + password.value)
            .then((res) => {
            const result = res.data.data;
            if (result) {
                dispatch(changeLogin());
            } else {
                alert('Login Failed');
            }
        });
    }
};

export const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});