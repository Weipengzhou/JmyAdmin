import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';
import { Form, Input, Select, Button, } from 'antd';
import Ueditor from './Ueditor';
import './BianJiCompanyZixun.less'
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



class Index extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            editorState:''
        }
    }

    componentDidMount() {
        // this.props.getGongdiMessage(this.props.location.query.gid)
        console.log(this.props.location.query.gid)
    }
  
    handleSubmit = (e) => {
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            const values = {
                ...fieldsValue,
            };
         
            console.log(values)
        });

    }
   
 
  
    render() {

        const { getFieldDecorator } = this.props.form;

        return (
            <div className='BianJiCompanyZixun'>

                <FormItem style={{ display: 'none' }}
                    {...formItemLayout}
                    label="id"
                >

                    {getFieldDecorator('id', {
                        initialValue: '',

                    })(
                        <Input style={{ width: '200px' }} disabled />

                        )}

                </FormItem>
               
                <FormItem
                    {...formItemLayout}
                    
                    label="标题"
                >
                    {getFieldDecorator('title', {
                        initialValue: '',

                    })(
                        <Input style={{ width: '200px' }} />

                        )}

                </FormItem>
              
                

                <FormItem
                    {...formItemLayout}
                    label="添加日期"
                   
                >
                    {getFieldDecorator('addtime', {
                        initialValue: '',

                    })(
                        <Input style={{ width: '200px' }} />

                        )}


                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="内容"

                >
                    <Ueditor  id="content" height="200" value={'欢迎使用百度富文本编辑器'} /> 

                </FormItem>
               
              
                <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>

                    <Button style={{ marginLeft: 8 }} onClick={this.handleSubmit.bind(this)}>保存</Button>
                </FormItem>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { gongdiMessage: state.reducers.gongdiMessage }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}
const BianJiCompanyZixun = Form.create()(Index);
export default connect(mapStateToProps, mapDispatchToProps)(BianJiCompanyZixun);
