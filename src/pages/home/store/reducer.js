import { fromJS } from 'immutable';
import * as constants  from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList:[],
    recommendList: [],
    recommendedAuthors: [],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state, action) =>{
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
    });
}

const addArticleList = (state, action) =>{
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    });
}

const toggleScrollTop = (state, action) =>{
    return state.set('showScroll', action.show);
}

const updateRecommendedAuthors = (state, action) => {
    return state.set('recommendedAuthors', fromJS(action.authors));
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case constants.ADD_ARTICLE_LIST:
             return addArticleList(state, action);
        case constants.TOGGLE_SCROLL_TOP:
             return toggleScrollTop(state, action);
        case constants.UPDATE_RECOMMENDED_AUTHORS:
             return updateRecommendedAuthors(state, action);
        default:
            return state;
    }
};

export default reducer;
