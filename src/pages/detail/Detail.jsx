import React, { useEffect } from "react";
import { DetailWrapper, DetailHeader, Content} from './style';
import { connect} from "react-redux";
import { actionCreators } from './store';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
    const { id } = useParams();
    
    useEffect(() => {
        props.getDetail(id);
    }, [id, props.getDetail]);

    console.log("Detail props id:", id);
    
    return (
        <DetailWrapper>
            <DetailHeader>{props.title}</DetailHeader>
            <Content dangerouslySetInnerHTML={{__html: props.content}}/>
        </DetailWrapper>
    );
};

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(Detail);
