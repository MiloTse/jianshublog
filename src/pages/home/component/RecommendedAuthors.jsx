import React, {PureComponent} from 'react';
import { RecommendedAuthorsInfo, RecommendedAuthorsTitle, RecommendedAuthorsItems, RecommendedAuthorsRefresh } from '../style'
import { connect} from "react-redux";


//RecommendedAuthors
class RecommendedAuthors extends PureComponent {

    render() {
        function handleRefreshRecommendedAuthors() {
            alert('refresh done');
            console.log('refresh recommended authors')
        }

        return (
            <RecommendedAuthorsInfo>
                <RecommendedAuthorsTitle>
                    <span>Recommended Authors</span>
                    <RecommendedAuthorsRefresh onClick={() => handleRefreshRecommendedAuthors()} className="page-change">
                        <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                        Refresh
                    </RecommendedAuthorsRefresh>
                    <RecommendedAuthorsItems/>
                        <ul>
                            <li>author1</li>
                            <li>author2</li>
                            <li>author3</li>
                            <li>author4</li>
                            <li>author5</li>
                            <li>author6</li>
                            <li>author7</li>
                            <li>author8</li>
                        </ul>
                    <RecommendedAuthorsItems/>


                </RecommendedAuthorsTitle>
            </RecommendedAuthorsInfo>
        )
    }
}



export default RecommendedAuthors;
