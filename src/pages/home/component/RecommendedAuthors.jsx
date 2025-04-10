import React, {PureComponent} from 'react';
import {RecommendedAuthorsWrap, RecommendedAuthorsInfo, RecommendedAuthorsTitle, RecommendedAuthorsList, RecommendedAuthorsRefresh } from '../style'
import { connect} from "react-redux";


//RecommendedAuthors
class RecommendedAuthors extends PureComponent {

    render() {
        function handleRefreshRecommendedAuthors() {
            alert('refresh done');
            console.log('refresh recommended authors')
        }

        return (
<>
            <RecommendedAuthorsWrap>
                    <RecommendedAuthorsInfo>
                            <RecommendedAuthorsTitle>
                                <span>推荐作者</span>
                                <RecommendedAuthorsRefresh onClick={() => handleRefreshRecommendedAuthors()} className="page-change">
                                    <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                                    换一批
                                </RecommendedAuthorsRefresh>
                                <RecommendedAuthorsList/>
                                <ul className="list">
                                    <li>
                                        <a href="/u/78f970537a5e?utm_source=desktop&amp;utm_medium=index-users"
                                           target="_blank"
                                           className="avatar">
                                            <img
                                                src="https://upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/></a>
                                        <a className="follow" state="0">
                                            <i className="iconfont ic-follow"></i>
                                            关注
                                        </a>
                                        <a href="/u/78f970537a5e?utm_source=desktop&amp;utm_medium=index-users"
                                           target="_blank"
                                           className="name">
                                            名贵的考拉熊
                                        </a>
                                        <p>
                                            写了311.2k字 · 19.9k喜欢
                                        </p>
                                    </li>


                                </ul>
                                <RecommendedAuthorsList/>


                            </RecommendedAuthorsTitle>

                    </RecommendedAuthorsInfo>
            </RecommendedAuthorsWrap>
    <div className="see-all" style={{display: 'block', color: '#3194d0', fontSize: '16px', cursor: 'pointer',}}>
        查看全部 >
    </div>
</>

        )
    }
}


export default RecommendedAuthors;
