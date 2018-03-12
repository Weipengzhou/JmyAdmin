import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';
import { Form, Input, Select, Button } from 'antd';


const FormItem = Form.Item;
const { Option } = Select;


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
    },
};
const submitFormLayout = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
    },
};

class Index extends Component{
    handleSubmit = (e) => {
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            const values = {
                ...fieldsValue,
            };

            this.props.xiuGaipassword(values)
        });

    }
     
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className='ChangePassword'>
                <FormItem
                    {...formItemLayout}
                    label="id"
                >
                    {getFieldDecorator('id', {
                        initialValue: this.props.c_content.id,

                    })(
                        <Input style={{ width: '200px' }} disabled />

                        )}

                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="账号"
                >
                    {getFieldDecorator('username', {
                        initialValue: this.props.c_content.username + '',

                    })(
                        <Input style={{ width: '200px' }} disabled/>

                        )}

                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="密码"
                >
                    {getFieldDecorator('password', {
                        initialValue: this.props.c_content.password + '',
                        rules: [{ required: true, message: '密码不得为空!' }],
                    })(
                        <Input style={{ width: '200px' }} />

                        )}

                </FormItem>
                <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>

                    <Button style={{ marginLeft: 8 }} onClick={this.handleSubmit.bind(this)}>保存</Button>
                </FormItem>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { c_content: state.reducers.c_content }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}
const ChangePassword = Form.create()(Index);
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);

