import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import BaiKeList from './BaiKe/BaiKeList';
import EffectDiagramList from './EffectDiagram/EffectDiagramList';
import NewsList from './News/NewsList';
import Modify from './News/Modify';
import './Edit.less';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Edit extends Component {
    render() {
        const path = this.props.match.path
     
        return (
            <div className='Edit'>       
                    <Layout style={{ height: '100%' }}>
                        <Header className="header">
                            <div className="logo" />
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['0']}
                                style={{ lineHeight: '64px', paddingLeft: '160px' }}>
                            </Menu>
                        </Header>
                    </Layout>
                    <Layout style={{ height: '100%' }}>
                        <Sider width={200} style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                            <SubMenu key="sub1" title={<span><Icon type="laptop" />新闻管理</span>}>
                                <Menu.Item key="1"><Link to={path + '/NewsList'}>新闻列表</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to=''>添加新闻</Link></Menu.Item>

                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop" />效果图管理</span>}>
                                <Menu.Item key="3"><Link to={path + '/EffectDiagramList'}>效果图列表</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to=''>添加效果图</Link></Menu.Item>

                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="laptop" />装修百科管理</span>}>
                                <Menu.Item key="5"><Link to={path+'/BaiKeList'}>装修百科列表</Link></Menu.Item>
                                <Menu.Item key="6"><Link to=''>添加装修百科</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" title={<span><Icon type="user"/>客户回访</span>}>
                                    <Menu.Item key="5"><Link to=''>报价列表</Link></Menu.Item>
                                    <Menu.Item key="6"><Link to=''>预约列表</Link></Menu.Item>
                                </SubMenu>

                            </Menu>
                        </Sider>
                    </Layout>
                    <Layout style={{ marginLeft: '200px' }}>

                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, position: 'relative' }}>
                                <Route path={`${this.props.match.path}/BaiKeList`} component={BaiKeList}/>
                                <Route path={`${this.props.match.path}/EffectDiagramList`} component={EffectDiagramList} />
                                <Route path={`${this.props.match.path}/NewsList`} component={NewsList} />
                                <Route path={`${this.props.match.path}/NewsList/:id/Modify`} component={Modify} />
                        </Content>
                    </Layout>
             </div>
        )
    }
}

function mapStateToProps(state) {
    return { }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);