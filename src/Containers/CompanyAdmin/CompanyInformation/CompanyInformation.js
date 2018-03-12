import React, { Component } from 'react';
import { Table, Button, Modal, } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';
import timestampToTime from '../../../Components/Day/Day'
const confirm = Modal.confirm;

function showConfirm(e, d, f) {

    confirm({
        title: '提示',
        content: '确定要删除么?',
        onOk() {
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 500);
            }).catch(e.delJinDu({ id: d, gid: f }));
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
        this.props.history.push({ pathname: '/Index/CompanyAdmin/' + this.props.location.query.id + '/AddGongdi', query: { id: this.props.location.query.id } })
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
                    return <Link to={{ pathname: '/Index/CompanyAdmin/' + text.pid + '/BianJiCompanyZixun', query: { id: text.pid, gid: text.id } }}>编辑</Link>
                }
            },
            
            {
                title: '删除',
                key: 'del',
                fixed: 'right',
                width: 100,
                render: (text, index) => (  //塞入内容       
                    <a onClick={() => showConfirm(this.props, text.id, text.gid)}>删除</a>
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
