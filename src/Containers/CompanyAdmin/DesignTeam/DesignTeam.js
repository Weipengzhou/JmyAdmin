import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';
import {Link} from 'react-router-dom';
import './DesignTeam.less';


class DesignTeam extends Component {
    constructor(props){
        super(props);
            this.state = {
                loading: false,
        }
    }
    componentDidMount(){
        this.props.getDesign(this.props.location.query.id)
        console.log(this.props.location.query.href + '/AddDesign')
    }
    handleClick(e){
        this.props.delDesign(e)
    }
 
    render() {
        const {designList}=this.props;

        return (
            <div className='DesignTeam'>
                {designList.map((result,index ) => (<div className='ant-design-list-item' key={index}><div className='ant-design-list-item-img'><img src={'http://127.0.0.1:8000/uploads/' + result.imagename} alt='' /> </div><p className='ant-design-list-item-name'>{result.name}</p><span className='ant-design-list-item-zhiwei'>{result.zhiwei}</span> <b onClick={this.handleClick.bind(this,result)}>删除</b> </div>))}
            
                   
                    <div className='ant-upload ant-upload-select ant-upload-select-picture-card'>
                    <Link to={{ pathname: this.props.location.query.href + '/AddDesign', query: { id: this.props.location.query.id, href: this.props.location.query.href } }}>
                            <span className='ant-upload' role='button'>
                            <input type="file" accept="" style={{ 'display': 'none' }} />
                            <i className="anticon anticon-plus"></i>
                                <div className="ant-upload-text">Upload</div>
                            </span>
                        </Link>
                    </div>
                  
                </div>
           
        )
    }
}
function mapStateToProps(state) {
    return {designList:state.reducers.designList  }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DesignTeam);