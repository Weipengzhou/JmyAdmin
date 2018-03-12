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
                            <Menu.Item key="0">郑州佳士得装修公司</Menu.Item>
                            <Menu.Item key="1"><Link to={{ pathname: '/Index/CompanyAdmin/'+id+'/BasicInformation',query:{id:id}}}>基础信息</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={{ pathname: '/Index/CompanyAdmin/' + id + '/ChangePassword', query: { id: id } }}>密码修改</Link></Menu.Item>
                            <Menu.Item key="3"><Link to={{ pathname: '/Index/CompanyAdmin/' + id + '/QualificationManagement', query: { id: id } }} >资质管理</Link></Menu.Item>
                            <Menu.Item key="4"><Link to={{ pathname: '/Index/CompanyAdmin/' + id + '/DesignTeam', query: { id: id } }}>设计团队</Link></Menu.Item>
                            <Menu.Item key="5"><Link to={{ pathname: '/Index/CompanyAdmin/' + id + '/ConstructionSite', query: { id: id } }}>在建工地</Link></Menu.Item>
                            <Menu.Item key="6"><Link to={{ pathname: '/Index/CompanyAdmin/' + id + '/CompanyInformation', query: { id: id } }}>公司资讯</Link></Menu.Item>
                            

                        </Menu>
                    </Sider>
                </Layout>    
                <Layout style={{ marginLeft: '200px' }}>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, position: 'relative' }}>
                        <Route path={'/Index/CompanyAdmin/'+id+'/BasicInformation'} component={BasicInformation} />
                        <Route path={'/Index/CompanyAdmin/'+id+'/ChangePassword'} component={ChangePassword} />
                        <Route path={'/Index/CompanyAdmin/'+id+'/QualificationManagement'} component={QualificationManagement} />
                        <Route path={'/Index/CompanyAdmin/'+id+'/DesignTeam'} component={DesignTeam} />
                        <Route path={'/Index/CompanyAdmin/'+id+'/ConstructionSite'} component={ConstructionSite} />
                        <Route path={'/Index/CompanyAdmin/'+id+'/CompanyInformation'} component={CompanyInformation} />
                        <Route path={'/Index/CompanyAdmin/'+id+'/AddDesign'} component={AddDesign} />
                        <Route path={'/Index/CompanyAdmin/'+id+'/BianjiGongdi'} component={BianjiGongdi} />
                        <Route path={'/Index/CompanyAdmin/' + id + '/JinDu'} component={JinDu} />
                        <Route path={'/Index/CompanyAdmin/' + id + '/AddGongdi'} component={AddGongdi} />
                        <Route path={'/Index/CompanyAdmin/' + id + '/BianJiCompanyZixun'} component={BianJiCompanyZixun} />
                    </Content>
                </Layout>
            </div>
        )
    }
}


export default CompanyAdmin;