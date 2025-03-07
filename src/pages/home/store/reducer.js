import { fromJS } from 'immutable';
import { CHANGE_TOPIC_LIST } from './constants';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        },
        {
            id: 2,
            title: '手绘',
            imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        },
        {
            id: 3,
            title: '简书电影',
            imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        },
        {
            id: 4,
            title: '读书',
            imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        }
    ]
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
