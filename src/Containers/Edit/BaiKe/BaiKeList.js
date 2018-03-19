import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';



class BaiKeList extends Component{
    render(){
        return(
            <div className='BaiKeList'>

            </div>
        )
    }
}


function mapStateToProps(state){
    return { }
}
function mapDispatchToProps(dispatch){
    return{
        ...bindActionCreators
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BaiKeList)