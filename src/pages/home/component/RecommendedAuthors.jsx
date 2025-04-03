import React, {PureComponent} from 'react';
import { RecommendedAuthorsWrapper, RecommendedAuthorsItems, RecommendedAuthorsRefresh } from '../style'
import { connect} from "react-redux";


//RecommendedAuthors
class RecommendedAuthors extends PureComponent {

    render() {
        function handleRefreshRecommendedAuthors() {
            alert('refresh done');
            console.log('refresh recommended authors')
        }

        return (
            <RecommendedAuthorsWrapper>
                <span>Recommended Authors</span>
                <RecommendedAuthorsRefresh onClick={() => handleRefreshRecommendedAuthors()} className="page-change">
                    <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                    Refresh
                </RecommendedAuthorsRefresh>
                <RecommendedAuthorsItems/>
                    <li>
                        <ul>author1</ul>
                        <ul>author2</ul>
                        <ul>author3</ul>
                        <ul>author4</ul>
                        <ul>author5</ul>
                        <ul>author6</ul>
                        <ul>author7</ul>
                        <ul>author8</ul>
                        <ul>author9</ul>
                    </li>
                <RecommendedAuthorsItems/>


            </RecommendedAuthorsWrapper>
        )
    }
}



export default RecommendedAuthors;
