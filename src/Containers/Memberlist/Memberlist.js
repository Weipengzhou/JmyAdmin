import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import {Link} from 'react-router-dom';
import { Table } from 'antd';
import timestampToTime from '../../Components/Day/Day'




class Memberlist extends Component{
    constructor(props){
      super(props);
      this.state={
        current:1,
      }
    }
    componentDidMount(){
      this.props.postMember({ s_city: this.props.first_city, page: this.props.page})
    }
    render(){
      const columns = [
        { title: '城市', width: 100, dataIndex: 's_city', key: '0', fixed: 'left' },
        { title: '公司名称', dataIndex: 'cname', key: '1', fixed: 'left' },
        { title: '公司编号', dataIndex: 'id', key: '2' },
        {
          title: '会员状态', key: 'userstatus',
          render: (text, index) => {
            if (text.userstatus == 1) {
              return 'vip'
            } else {
              return '普通'
            }
          }
        },
        { title: '备注', dataIndex: 'beizhu', key: '4' },
        {
          title: '审核状态', key: 'isshow',
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
        {
          title: '添加日期', key: 'addtime',
          render: (text, index) => {

            if (!isNaN(text.addtime)) {
              return timestampToTime(text.addtime)
            } else {
              return '1999-01-1'
            }
          }

        },
        {
          title: '基本资料',
          key: 'operation',
          fixed: 'right',
          width: 100,
          render: (text, index) => (  //塞入内容       
            <Link to={{ pathname: '/Index/Bmemberlist/' + text.id, query: { id: text.id } }}>编辑</Link>
          )
        },
        {
          title: '管理',
          key: 'guanli',
          fixed: 'right',
          width: 100,
          render: (text, index) => (  //塞入内容       
            <Link to={{ pathname: this.props.match.url + '/' + text.id + '/BasicInformation', query: { id: text.id} }}>管理</Link>
          )
        },
      ];
     
      const { company_list, count} =this.props;
        return(
            <div className='Memberlist'>
            <Table columns={columns} dataSource={company_list} rowKey="id" scroll={{ x: 1200 }} pagination={{
              total: count,
              current: this.props.page,  
              onChange: (page, pageSize) => {
                this.props.postMember({ s_city: this.props.first_city, page: page })
                this.props.reduxPage(page)
              }
            }} />
            </div>    
        )
    }
}

function mapStateToProps(state) {
  return { company_list: state.reducers.company_list, first_city: state.reducers.first_city, count: state.reducers.count,page:state.reducers.page}
  }
  
  function mapDispatchToProps(dispatch) {
     return {
       ...bindActionCreators(action, dispatch)
     }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Memberlist);