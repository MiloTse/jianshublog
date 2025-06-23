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
                            <span>Recommended Authors</span>
                            <RecommendedAuthorsRefresh onClick={this.handleRefreshClick}>
                                <span className="iconfont spin">&#xe851;</span>
                                Refresh
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
                                            <p>Wrote {item.get('wordCount')} words · {item.get('likeCount')} likes</p>
                                        </div>
                                        <a className="follow">
                                            <i className="iconfont ic-follow">+</i>Follow
                                        </a>
                                    </RecommendedAuthorsItem>
                                ))}
                            </RecommendedAuthorsList>
                        ) : (
                            <div>Loading...</div>
                        )}
                    </RecommendedAuthorsInfo>
                </RecommendedAuthorsWrap>
                <SeeAllButton>See All {'>'}</SeeAllButton>
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
