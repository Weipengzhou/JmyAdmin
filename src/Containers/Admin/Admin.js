import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';

class Admin extends Component{
    render(){
        return(
        <div className='Admin'>
                

        </div>
        )
    }
}

function mapStateToProps(state) {
    return { content: state.reducers.content }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);