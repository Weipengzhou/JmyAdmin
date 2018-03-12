import React, { Component } from 'react';
import {Icon} from 'antd';
class Success extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Success'>   
                <Icon type="check-circle-o" />
            </div>    
        )
    }
}

export default Success;