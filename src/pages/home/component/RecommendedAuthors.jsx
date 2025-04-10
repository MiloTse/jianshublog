import React, {PureComponent} from 'react';
import {
    RecommendedAuthorsWrap, 
    RecommendedAuthorsInfo, 
    RecommendedAuthorsTitle, 
    RecommendedAuthorsList,
    RecommendedAuthorsItem,
    RecommendedAuthorsRefresh,
    SeeAllButton
} from '../style';
import { connect} from "react-redux";

//RecommendedAuthors
class RecommendedAuthors extends PureComponent {

    render() {
        return (
            <>
                <RecommendedAuthorsWrap>
                    <RecommendedAuthorsInfo>
                        <RecommendedAuthorsTitle>
                            <span>推荐作者</span>
                            <RecommendedAuthorsRefresh onClick={this.handleRefreshClick}>
                                <span className="iconfont spin">&#xe851;</span>
                                换一批
                            </RecommendedAuthorsRefresh>
                        </RecommendedAuthorsTitle>



                        {/* should fetch data from server and integrate into this component*/}
                        <RecommendedAuthorsList>
                            <RecommendedAuthorsItem>
                                <li className="recommended-authors-item">
                                    <a className="avatar">
                                        <img
                                            src="https://upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                                            alt="author"/>
                                    </a>
                                    <div className="info">
                                        <a className="name">名贵的考拉熊</a>
                                        <p>写了311.2k字 · 19.9k喜欢</p>
                                    </div>
                                    <a className="follow">
                                        <i className="iconfont ic-follow">+</i>关注
                                    </a>
                                </li>

                            </RecommendedAuthorsItem>
                            <RecommendedAuthorsItem>
                                <li className="recommended-authors-item">
                                    <a className="avatar">
                                        <img
                                            src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                                            alt="author"/>
                                    </a>
                                    <div className="info">
                                        <a className="name">董克平日记</a>
                                        <p>写了1258.7k字 · 5.8k喜欢</p>
                                    </div>
                                    <a className="follow">
                                        <i className="iconfont ic-follow">+</i>关注
                                    </a>
                                </li>
                            </RecommendedAuthorsItem>
                        </RecommendedAuthorsList>
                    </RecommendedAuthorsInfo>
                </RecommendedAuthorsWrap>
                <SeeAllButton>查看全部 {'>'}</SeeAllButton>
            </>
        )
    }

    handleRefreshClick = () => {
        alert('refresh done');
        console.log('refresh recommended authors');
    }
}


export default RecommendedAuthors;
