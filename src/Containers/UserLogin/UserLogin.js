import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import Log from 'ant-design-pro/lib/Login';
import { Alert } from 'antd';
import './UserLogin.css';
const { Tab, UserName, Password, Submit } = Log;

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'tab1',
            notice: '',
        }
    }

    onSubmit = (err, values) => {
        if (!err) {
            this.props.userLogin(values)

        }
    }

    onTabChange = (key) => {
        this.setState({
            type: key,
        });
    }

    render() {
        return (
            <div className='UserLogin'>
                <div className='header'>
                    <p>金蚂蚁装修网商家管理平台</p>
                </div>
                <Log defaultActiveKey={this.state.type}
                    onTabChange={this.onTabChange}
                    onSubmit={this.onSubmit}>
                    <Tab key="tab1" tab="">
                        {
                            this.props.notice &&
                            <Alert style={{ marginBottom: 24 }} message={this.props.notice} type="error" showIcon closable />
                        }
                        <UserName name="username" placeholder='请输入账户' />
                        <Password name="password" placeholder='请输入密码' />
                    </Tab>

                    <Submit>登录</Submit>

                </Log>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { login_res: state.reducers.login_res, notice: state.reducers.notice }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);