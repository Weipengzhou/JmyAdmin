import React, { Component } from 'react';
import { Table, Button, Modal, } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';
import timestampToTime from '../../../Components/Day/Day'
const confirm = Modal.confirm;

function showConfirm(e, d,f) {
    console.log(e,d,f)
    confirm({
        title: '提示',
        content: '确定要删除么?',
        onOk() {
           e.delCompanyZixunList({id:d,pid:f})
        },
        onCancel() { },
    });
}

class CompanyInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.props.getCompanyZixunList(this.props.location.query.id)
    }
    handleClick = () => {
        this.props.history.push({ pathname: this.props.location.query.href + '/AddCompanyInformation', query: { id: this.props.location.query.id, href: this.props.location.query.href } })
    }


    render() {
        const { CompanyZixunList } = this.props
        const columns = [
            { title: '编号', width: 100, dataIndex: 'id', key: 'id', fixed: 'left' },
            { title: '标题', dataIndex: 'title', key: 'title' },
            { title: '添加日期', key: 'addtime',
                render: (text, index) => {

                    if (!isNaN(text.addtime)) {
                        return timestampToTime(text.addtime)
                    } else {
                        return '1999-01-1'
                    }
                } 
            },

            {
                title: '编辑',
                key: 'bianji',
                fixed: 'right',
                width: 100,
                render: (text, index) => { //塞入内容           
                    return <Link to={{ pathname: this.props.location.query.href + '/BianJiCompanyZixun', query: { id: text.pid, gid: text.id, href: this.props.location.query.href} }}>编辑</Link>
                }
            },
            
            {
                title: '删除',
                key: 'del',
                fixed: 'right',
                width: 100,
                render: (text, index) => (  //塞入内容       
                    <a onClick={() => showConfirm(this.props, text.id,text.pid)}>删除</a>
                )
            },

        ];
        return (
            <div className='CompanyInformation'>
                <Button type="primary" icon="plus-circle-o" style={{ marginBottom: '20px' }} onClick={this.handleClick.bind(this)} >添加</Button>
                <Table columns={columns} dataSource={CompanyZixunList} rowKey="id" scroll={{ x: 1200 }} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { CompanyZixunList: state.reducers.CompanyZixunList }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanyInformation);
