import { fromJS } from 'immutable';
import { CHANGE_TOPIC_LIST } from './constants';
import hot_in_7_days from '../../../statics/recommend/hot_in_7_days.png'
import copyright from '../../../statics/recommend/copyright.png'
import member from '../../../statics/recommend/member.png'
import daily_update_challenge from '../../../statics/recommend/daily_update_challenge.png'
import best_serial from '../../../statics/recommend/best_serial.png'


const defaultState = fromJS({
    topicList: [],
    articleList:[],
    recommendList: []
});

 const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_TOPIC_LIST:
            return state.set('topicList', action.data);
        default:
            return state;
    }
};

export default reducer;
