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
    ],
    articleList:[
        {
            id: 1,
            title: '歌12年后首谈车祸：既然活下来了，就不能白白活着',
            desc: '文/麦大人01胡歌又刷屏了。近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的噪音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：',
            imgUrl: '//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        {
            id: 2,
            title: '歌12年后首谈车祸：既然活下来了，就不能白白活着',
            desc: '文/麦大人01胡歌又刷屏了。近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的噪音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：',
            imgUrl: '//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        {
            id: 3,
            title: '歌12年后首谈车祸：既然活下来了，就不能白白活着',
            desc: '文/麦大人01胡歌又刷屏了。近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的噪音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：',
            imgUrl: '//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        {
            id: 4,
            title: '歌12年后首谈车祸：既然活下来了，就不能白白活着',
            desc: '文/麦大人01胡歌又刷屏了。近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的噪音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：',
            imgUrl: '//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
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
