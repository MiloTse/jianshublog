import * as constants  from './constants';
import axios from "axios";
import {ADD_ARTICLE_LIST} from "./constants";
import { fromJS} from "immutable";

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

//List function from immutable can also convert normal obj to immutable obj, but just just convert the
//outer, except the inner
const addHomeList = (list) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list)
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
}

export const getMoreList = () => {
    return (dispatch) => {
        console.log('click to load more');
        axios.get('/api/homeList.json').then((res) => {
            const result = res.data.data;
            console.log(result);
            dispatch(addHomeList(result));

        })
    }
}
