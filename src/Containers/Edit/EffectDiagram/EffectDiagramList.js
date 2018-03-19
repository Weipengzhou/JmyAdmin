import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';



class EffectDiagramList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='EffectDiagramList'>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EffectDiagramList)