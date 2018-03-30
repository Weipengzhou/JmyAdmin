import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import { Layout, Menu, Icon } from 'antd';
import { Route,Link} from 'react-router-dom';
import List from '../List/List';
import Addlist from '../Addlist/Addlist';
import Bianji from '../Bianji/Bianji';
import Memberlist from '../Memberlist/Memberlist';
import Bmemberlist from '../Bmemberlist/Bmemberlist';
import Addmember from '../Addmember/Addmember';
import CompanyAdmin from '../CompanyAdmin/CompanyAdmin';
import Success from '../Success/Success';
import './Index.less';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }

    }
    handleClick(e){
        this.props.firstCity(e.item.props.children)
        this.props.postZhaobiao(e.item.props.children)
        this.props.postMember({s_city:e.item.props.children,page:1})
        this.props.reduxPage(1)
    }

    componentDidMount(){

    }

    render() {
        const { city } =this.props;
     
        return (
             
            <div className='Index'>
  
                  
                    <div>
                        <Layout style={{height:'100%'}}>
                        <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['0']}
                            style={{ lineHeight: '64px' ,paddingLeft:'160px'}}
                            onClick={this.handleClick.bind(this)}
                        >
                        
                        {city.map((result,index)=>(
                                    <Menu.Item key={index} >{result}</Menu.Item>
                        ))}
                            
                    
                        </Menu>
                        </Header>
                       </Layout>
                        <Layout style={{height:'100%'}}>
                        <Sider width={200} style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0  }}>
                            <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            >
                            <SubMenu key="sub1" title={<span><Icon type="user" />招标管理</span>}>
                                        <Menu.Item key="1"><Link to='/Index/List'>招标列表</Link></Menu.Item>
                                        <Menu.Item key="2"><Link to='/Index/Addlist'>添加招标</Link></Menu.Item>
                            
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />合作会员管理</span>}>
                                        <Menu.Item key="3"><Link to='/Index/Memberlist'>会员列表</Link></Menu.Item>
                                        <Menu.Item key="4"><Link to='/Index/Addmember'>添加会员</Link></Menu.Item>
                                
                            </SubMenu>
                        
                            </Menu>
                        </Sider>
                        </Layout>
                        <Layout style={{marginLeft:'200px' }}>
       
                          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280,position:'relative' }}>
              
                            <Route path={`${this.props.match.path}/List`} component={List} />
                            <Route path={`${this.props.match.path}/Addlist`} component={Addlist} />
                            <Route path={`${this.props.match.path}/Bianji/:id`} component={Bianji} />
                            <Route path={`${this.props.match.path}/Memberlist`} exact component={Memberlist} />
                            <Route path={`${this.props.match.path}/Addmember`} component={Addmember} />
                            <Route path={`${this.props.match.path}/Success`} component={Success} />
                            <Route path={`${this.props.match.path}/Bmemberlist/:id`} component={Bmemberlist} />
                            <Route path={`${this.props.match.path}/Memberlist/:id`} component={CompanyAdmin} />
                            
                         </Content>
                         </Layout>
                       
                      
                       
                        
                    </div>    
                 
              
              
            
            
            </div>
            
          
           
        );
    }
}
function mapStateToProps(state) {
    return { city: state.reducers.city, model_statu: state.reducers.model_statu}
  }
  
  function mapDispatchToProps(dispatch) {
     return {
       ...bindActionCreators(action, dispatch)
     }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Index);