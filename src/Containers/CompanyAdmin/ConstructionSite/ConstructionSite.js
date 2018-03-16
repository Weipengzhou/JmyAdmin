import React, { Component } from 'react';
import { Table, Button, Modal, } from 'antd';
import {  Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';
const confirm = Modal.confirm;

function showConfirm(e,d,f) {
   
    confirm({
        title: '提示',
        content: '确定要删除么?',
        onOk() {
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 500);
            }).catch(e.delJinDu({id:d,gid:f}));
        },
        onCancel() { },
    });
}

class ConstructionSite extends Component {
    constructor(props){
        super(props);
        this.state={
              }
    }
    componentDidMount() {
        this.props.getGongdiList(this.props.location.query.id)
    }
    handleClick = () => {
        this.props.history.push({ pathname: this.props.location.query.href + '/AddGongdi', query: { id: this.props.location.query.id, href: this.props.location.query.href } })
    }
    

    render() {
        const { gongdiList} =this.props
        const columns = [
            { title: '名称', width: 100, dataIndex: 'gname', key: 'gname', fixed: 'left' },
            { title: '城市', dataIndex: 's_city', key: 's_city' },
            { title: '地址', dataIndex: 'address', key: 'address' },
            {
                title: '类型', key: 'leixing', render: (text, index) => {
                    if (text.leixing == 0) {
                        return '半包'
                    } else {
                        return '全包'
                    }
                }
            },
            { title: '面积', dataIndex: 'area', key: 'area' },
            { title: '价格', dataIndex: 'price', key: 'price' },

            {
                title: '施工进度', key: 'overstatus', render: (text, index) => {
                    switch (text.overstatus) {
                        case 1:
                            return '准备开工';
                        case 2:
                            return '水电阶段';
                        case 3:
                            return '泥木阶段';
                        case 4:
                            return '油漆阶段';
                        case 5:
                            return '竣工阶段';
                        default:
                            return '无进度'
                    }

                }
            },
            {
                title: '编辑',
                key: 'bianji',
                fixed: 'right',
                width: 100,
                render: (text, index) => { //塞入内容           
                    return <Link to={{ pathname: this.props.location.query.href + '/BianjiGongdi', query: { id: text.gid, gid: text.id, href: this.props.location.query.href } }}>编辑</Link>
                }
            },
            {
                title: '图片管理',
                key: 'img',
                fixed: 'right',
                width: 100,
                render: (text, index) => (  //塞入内容       
                    <Link to={{ pathname: this.props.location.query.href + '/JinDu', query: { id: text.gid, gid: text.id, href: this.props.location.query.href } }}>编辑</Link>
                )
            },
            {
                title: '删除',
                key: 'del',
                fixed: 'right',
                width: 100,
                render: (text, index) => (  //塞入内容       
                    <a onClick={() => showConfirm(this.props, text.id,text.gid)}>删除</a>
                )
            },

        ];
        return (
            <div className='ConstructionSite'>
                <Button type="primary" icon="plus-circle-o" style={{ marginBottom: '20px' }} onClick={this.handleClick.bind(this)} >添加</Button>
                <Table columns={columns} dataSource={gongdiList} rowKey="id" scroll={{ x: 1200 }} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {gongdiList:state.reducers.gongdiList}
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ConstructionSite);