import React, { Component } from 'react';
import { WriterWrapper, WriterItem } from '../style'
import { connect} from "react-redux";



class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <WriterItem/>
                <WriterItem/>


            </WriterWrapper>
        )
    }
}



export default Writer;
