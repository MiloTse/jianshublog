import React, {PureComponent} from 'react';
import { WriterWrapper, WriterItem } from '../style'
import { connect} from "react-redux";



class Writer extends PureComponent {
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
