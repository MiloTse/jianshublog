import {fromJS} from 'immutable';
import * as constants from './constants';
// import React from "react";


const defaultState = fromJS({
    title: '',
    content: '',
});

const changeDetail = (state, action) =>{
    return state.merge({
        title: action.title,
        content: action.content
    });
}



const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return changeDetail(state, action);
        default:
            return state;
    }
};

export default reducer;
