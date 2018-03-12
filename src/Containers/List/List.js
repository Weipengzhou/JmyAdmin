import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import { Table } from 'antd';
import timestampToTime from '../../Components/Day/Day';
import moment from 'moment';
const columns = [
    { title: '城市', width: 100, dataIndex: 's_city', key: '0', fixed: 'left' },
    { title: '小区名称', dataIndex: 'comm', key: '1', fixed: 'left' },
  {
    title: '回访时间',  key: 'rebacktime',
      render: (text, index) => {
        if (!isNaN(text.rebacktime)) {
          return timestampToTime(text.rebacktime)
        } else {
          return '1999-01-1'
        }
      }
  },
    { title: '备注', dataIndex: 'beizhu', key: '3' },
  { title: '来源',  key: 'bstatus' ,
  render:(text,index)=>{
    if (text.bstatus == 0) {
      return '手机推广'
    } else if (text.bstatus == 1) {
      return 'pc推广'
    } else {
      return '其他'
    }
  }
},
  { title: '审核状态', key: 'shstatus',
    render: (text, index) => {
      if (text.isshow == 0) {
        return '拒绝'
      } else if (text.isshow == 1) {
        return '通过'
      } else {
        return '待审核'
      }
    }
 },
    { title: 'ip', dataIndex: 'ip', key: '6' },
  { title: '发布时间',  key: 'addtime' ,
 render:(text,index)=>{
   if (!isNaN(text.addtime)) {
     return timestampToTime(text.addtime)
   } else {
     return '1999-01-1'
   }
 }
},
    // { title: '最后修改时间', dataIndex: 'shtime', key: '8'},
    {
      title: '编辑',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text,index) => (  //塞入内容       
        <Link to={{ pathname:'/Index/Bianji/'+text.id,query:{id:text.id}}}>编辑</Link>
        )
    },
  ];
  
  
class List extends Component{
  
    componentDidMount(){
      this.props.postZhaobiao(this.props.first_city)
  }
    render(){
      const {biao_list} =this.props;
     
        return(
            <div className='List'>
               <Table columns={columns} dataSource={biao_list} rowKey="id" scroll={{ x: 1200 }} />
            </div>    
        )
    }
}

function mapStateToProps(state) {
    return { first_city:state.reducers.first_city,biao_list:state.reducers.biao_list}
  }
  
  function mapDispatchToProps(dispatch) {
     return {
       ...bindActionCreators(action, dispatch)
     }
  }

export default connect(mapStateToProps, mapDispatchToProps)(List);