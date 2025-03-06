import * as constants from './constants';
import axios from "axios";
import {fromJS} from "immutable";

const changeList = (data) => ({
        type: constants.CHANGE_LIST,
        //convert data to immutable type to match initial list at defaultState at store/reducer.js file
        data: fromJS(data),
        totalPage: Math.ceil(data.length / 10)
    }
)
export const searchFocus = () =>({
    type: constants.SEARCH_FOCUS


});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});



export const getList = () => {
    return (dispatch) => {
        console.log(123);
        axios.get('/api/headerList.json').then((res)=>{
            console.log('ok');
            console.log(res);
            const data = res.data;
            console.log(data);
            const action = changeList(data.data);
            dispatch(action);
        }).catch(()=>{
            console.log('error');
        })
        console.log(456);

    }
}