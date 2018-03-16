import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';

import BasicInformation from './BasicInformation/BasicInformation';
import ChangePassword from './ChangePassword/ChangePassword';
import QualificationManagement from './QualificationManagement/QualificationManagement';
import DesignTeam from './DesignTeam/DesignTeam';
import ConstructionSite from './ConstructionSite/ConstructionSite';
import CompanyInformation from './CompanyInformation/CompanyInformation';
import AddDesign from './AddDesign/AddDesign';
import BianjiGongdi from './BianjiGongdi/BianjiGongdi';
import JinDu from './JinDu/JinDu';
import AddGongdi from './AddGongdi/AddGongdi';
import BianJiCompanyZixun from './BianJiCompanyZixun/BianJiCompanyZixun'
import AddCompanyInformation from './AddCompanyInformation/AddCompanyInformation'
const { Content, Sider } = Layout;

class CompanyAdmin extends Component{
  
    render(){
       
            const id = this.props.location.query.id

        return(
            <div className='CompanyAdmin'>
                <Layout style={{ height: '100%' }} >
                    <Sider width={200} style={{ overflow: 'auto', height: '100vh', position: 'absolute', left: 0 }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="0">个人中心</Menu.Item>
                            <Menu.Item key="1"><Link to={{ pathname: this.props.match.url + '/BasicInformation', query: { id: id, href: this.props.match.url}}}>基础信息</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={{ pathname: this.props.match.url + '/ChangePassword', query: { id: id, href: this.props.match.url } }}>密码修改</Link></Menu.Item>
                            <Menu.Item key="3"><Link to={{ pathname: this.props.match.url + '/QualificationManagement', query: { id: id, href: this.props.match.url } }} >资质管理</Link></Menu.Item>
                            <Menu.Item key="4"><Link to={{ pathname: this.props.match.url + '/DesignTeam', query: { id: id, href: this.props.match.url } }}>设计团队</Link></Menu.Item>
                            <Menu.Item key="5"><Link to={{ pathname: this.props.match.url + '/ConstructionSite', query: { id: id, href: this.props.match.url } }}>在建工地</Link></Menu.Item>
                            <Menu.Item key="6"><Link to={{ pathname: this.props.match.url + '/CompanyInformation', query: { id: id, href: this.props.match.url } }}>公司资讯</Link></Menu.Item>
                            

                        </Menu>
                    </Sider>
                </Layout>    
                <Layout style={{ marginLeft: '200px' }}>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, position: 'relative' }}>
                        <Route path={this.props.match.url+'/BasicInformation'} component={BasicInformation} />
                        <Route path={this.props.match.url+'/ChangePassword'} component={ChangePassword} />
                        <Route path={this.props.match.url+'/QualificationManagement'} component={QualificationManagement} />
                        <Route path={this.props.match.url+'/DesignTeam'} component={DesignTeam} />
                        <Route path={this.props.match.url+'/ConstructionSite'} component={ConstructionSite} />
                        <Route path={this.props.match.url+'/CompanyInformation'} component={CompanyInformation} />
                        <Route path={this.props.match.url+'/AddDesign'} component={AddDesign} />
                        <Route path={this.props.match.url+'/BianjiGongdi'} component={BianjiGongdi} />
                        <Route path={this.props.match.url+'/JinDu'} component={JinDu} />
                        <Route path={this.props.match.url+'/AddGongdi'} component={AddGongdi} />
                        <Route path={this.props.match.url+'/BianJiCompanyZixun'} component={BianJiCompanyZixun} />
                        <Route path={this.props.match.url+'/AddCompanyInformation'} component={AddCompanyInformation} />
                    </Content>
                </Layout>
            </div>
        )
    }
}


export default CompanyAdmin;