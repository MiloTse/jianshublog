import { fromJS } from 'immutable';
import { CHANGE_TOPIC_LIST } from './constants';

export const changeTopicList = (data) => ({
    type: CHANGE_TOPIC_LIST,
    data: fromJS(data)
});
