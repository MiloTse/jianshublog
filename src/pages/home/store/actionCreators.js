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
const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
         axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
             dispatch(addHomeList(result, page+1));

        })
    }
}
