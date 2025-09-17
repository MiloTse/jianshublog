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
    constructor(props) {
        super(props);
        this.state = {
            showAll: false
        };
    }

    componentDidMount() {
        this.props.getRecommendedAuthors();
    }

    render() {
        const { recommendedAuthors } = this.props;
        const { showAll } = this.state;
        
        // 根据showAll状态决定显示的作者数量
        const displayAuthors = recommendedAuthors && recommendedAuthors.size > 0 
            ? (showAll ? recommendedAuthors : recommendedAuthors.slice(0, 2))
            : null;
        
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

                        {displayAuthors ? (
                            <RecommendedAuthorsList>
                                {displayAuthors.map((item, index) => (
                                    <RecommendedAuthorsItem key={item.get('id') || index}>
                                        <div className="avatar">
                                            <img
                                                src={item.get('avatar')}
                                                alt={item.get('name')}/>
                                        </div>
                                        <div className="info">
                                            <div className="name">{item.get('name')}</div>
                                            <p className="words">Wrote {item.get('wordCount')} words</p>
                                            <p className="likes">{item.get('likeCount')} likes</p>
                                        </div>
                                        <button className="follow">
                                            <span className="plus-icon">+</span>Follow
                                        </button>
                                    </RecommendedAuthorsItem>
                                ))}
                            </RecommendedAuthorsList>
                        ) : (
                            <div>Loading...</div>
                        )}
                    </RecommendedAuthorsInfo>
                </RecommendedAuthorsWrap>
                {recommendedAuthors && recommendedAuthors.size > 2 && (
                    <SeeAllButton onClick={this.handleSeeAllClick}>
                        {showAll ? 'Show Less' : 'See All >'}
                    </SeeAllButton>
                )}
            </>
        )
    }

    handleRefreshClick = () => {
        this.props.getRecommendedAuthors();
    }

    handleSeeAllClick = () => {
        this.setState({
            showAll: !this.state.showAll
        });
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
