import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Table, Modal } from 'antd';
import * as action from '../../../redux/actions';
import timestampToTime from '../../../Components/Day/Day'
const confirm = Modal.confirm;

function showConfirm(e, d, f) {
    console.log(e, d, f)
    confirm({
        title: '提示',
        content: '确定要删除么?',
        onOk() {
            e.delCompanyZixunList({ id: d})
        },
        onCancel() { },
    });
}
class NewsList extends Component {
    componentDidMount(){
        this.props.getNewsList()
    }
    render() {
        const columns = [
            { title: 'id', width: 100, dataIndex: 'id', key: '0', fixed: 'left' },
            {
                title: '封面图',
                key: '3',
                fixed: 'left',
                width: 100,
                render: (text, index) => (  //塞入内容       
                    <img src={'http://zxjmy.com/Public/Upload/' + text.imagename} alt='' style={{ 'width': '70px', 'height': '50px' }} />
                )
            },
            { title: '标题', dataIndex: 'title', key: '1', fixed: 'left' },
            { title: '导语', dataIndex: 'daoyu', key: '2', width: 700,},
            { title: '添加日期', key: 'addtime',
                render: (text, index) => (!isNaN(text.addtime) ? timestampToTime(text.addtime) : '1999-01-1')
            },
           
            {
                title: '修改',
                key: 'xiugai',
                fixed: 'right',
                width: 100,
                render: (text, index) => (  //塞入内容       
                    <Link to={{ pathname: this.props.match.url + '/' + text.id + '/Modify', query: { id: text.id } }}>修改</Link>
                )
            },
            {
                title: '删除',
                key: 'del',
                fixed: 'right',
                width: 100,
                render: (text, index) => (  //塞入内容       
                    <a onClick={() => showConfirm(this.props, text.id)}>删除</a>
                )
            },
        ];
        const {NewsList} =this.props
        return (
            <div className='NewsList'>
                <Table columns={columns} dataSource={NewsList} rowKey="id" scroll={{ x: 1200 }} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {NewsList:state.reducers.NewsList}
}
function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsList)