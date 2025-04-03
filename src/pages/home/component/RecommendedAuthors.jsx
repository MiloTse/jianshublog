import React, {PureComponent} from 'react';
import { RecommendedAuthorsWrapper, RecommendedAuthorsItem } from '../style'
import { connect} from "react-redux";


//recommended-authors
//RecommendedAuthors
class RecommendedAuthors extends PureComponent {
    render() {
        return (
            <RecommendedAuthorsWrapper>
                <RecommendedAuthorsItem/>
                <RecommendedAuthorsItem/>


            </RecommendedAuthorsWrapper>
        )
    }
}



export default RecommendedAuthors;
