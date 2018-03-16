import React,{Component} from 'react';
import CompanyAdmin from '../CompanyAdmin/CompanyAdmin'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import * as action from '../../redux/actions';
class UserIndex extends Component{

    render(){
       return(
       <div className='UserIndex'>
               <Route path={`${this.props.match.path}/Memberlist/:id`} component={CompanyAdmin} />
       </div>
       )
    }
}

function mapStateToProps(state) {
    return { company_list: state.reducers.company_list, first_city: state.reducers.first_city }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
