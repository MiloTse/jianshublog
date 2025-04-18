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
import { actionCreators } from '../store';

//RecommendedAuthors
class RecommendedAuthors extends PureComponent {
    componentDidMount() {
        this.props.getRecommendedAuthors();
    }

    render() {
        const { recommendedAuthors } = this.props;
        
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

                        {recommendedAuthors && recommendedAuthors.size > 0 ? (
                            <RecommendedAuthorsList>
                                {recommendedAuthors.map((item, index) => (
                                    <RecommendedAuthorsItem key={item.get('id') || index}>
                                        <a className="avatar">
                                            <img
                                                src={item.get('avatar')}
                                                alt={item.get('name')}/>
                                        </a>
                                        <div className="info">
                                            <a className="name">{item.get('name')}</a>
                                            <p>写了{item.get('wordCount')}字 · {item.get('likeCount')}喜欢</p>
                                        </div>
                                        <a className="follow">
                                            <i className="iconfont ic-follow">+</i>关注
                                        </a>
                                    </RecommendedAuthorsItem>
                                ))}
                            </RecommendedAuthorsList>
                        ) : (
                            <div>加载中...</div>
                        )}
                    </RecommendedAuthorsInfo>
                </RecommendedAuthorsWrap>
                <SeeAllButton>查看全部 {'>'}</SeeAllButton>
            </>
        )
    }

    handleRefreshClick = () => {
        this.props.getRecommendedAuthors();
    }
}

const mapState = (state) => ({
    recommendedAuthors: state.getIn(['home', 'recommendedAuthors'])
});

const mapDispatch = (dispatch) => ({
    getRecommendedAuthors() {
        dispatch(actionCreators.getRecommendedAuthors());
    }
});

export default connect(mapState, mapDispatch)(RecommendedAuthors);
