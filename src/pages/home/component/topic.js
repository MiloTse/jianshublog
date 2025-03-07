import React, { PureComponent } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {list.map((item) => (
                    <TopicItem key={item.get('id')}>
                        <img
                            className='topic-pic'
                            alt={item.get('title')}
                            src={item.get('imgUrl')}
                        />
                        {item.get('title')}
                    </TopicItem>
                ))}
            </TopicWrapper>
        )
    }
}

 const mapState = (state) => ({
    //get topicList to assign to list
    //convert immutable to normal list
    list: state.getIn(['home', 'topicList'])
});

//not use mapDispatchToProps right now, so set null
export default connect(mapState, null)(Topic);