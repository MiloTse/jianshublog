import * as constants from './constants';
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused: false,
    list: []//initial value is immutable

});

export default (state = defaultState, action) => {
    switch (action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.set('list', action.data);
        default:
            return state;
    }

/*
    if(action.type === constants.SEARCH_FOCUS){
        //immutable 对象的set方法， 会结合之前immutable对象的值
        //和设置的值，返回一个全新的对象。
        //由于已经设置了focused为immutable,因此不能用focused:true的方式
        //Did not change the original content
        return state.set('focused', true);
    }
    if(action.type === constants.SEARCH_BLUR){
        return state.set('focused', false);
    }
    if(action.type === constants.CHANGE_LIST){
        // console.log('CHANGE_LIST_test');
        return state.set('list', action.data);
    }
    return state;
    */
}