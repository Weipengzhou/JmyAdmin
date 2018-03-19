import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';
import { Form, Input, Select, Button, DatePicker } from 'antd';
import Ueditor from '../../CompanyAdmin/Ueditor';

import moment from 'moment';
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
            editorState: ''
        }
    }

    componentDidMount() {
        this.props.getCompanyZixunAbout(this.props.location.query.gid)
    }

    handleSubmit = (e) => {
        var content = new Date().UE.getEditor('content').getContent();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            const values = {
                ...fieldsValue,
                'addtime': fieldsValue['addtime'].format('X'),
            };

            this.props.gaiCompanyZixunAbout({ values: values, content: content, pid: this.props.CompanyZixunAbout.pid, href: this.props.location.query.href })
        });

    }



    render() {

        const { getFieldDecorator } = this.props.form;
        const { CompanyZixunAbout } = this.props;
        const config = { initialValue: moment(CompanyZixunAbout.addtime, 'X') }
        return (
            <div className='Modify'>

                <FormItem style={{ display: 'none' }}
                    {...formItemLayout}
                    label="id"
                >

                    {getFieldDecorator('id', {
                        initialValue: this.props.location.query.gid,

                    })(
                        <Input style={{ width: '200px' }} disabled />

                        )}

                </FormItem>

                <FormItem
                    {...formItemLayout}

                    label="标题"
                >
                    {getFieldDecorator('title', {
                        initialValue: CompanyZixunAbout.title,

                    })(
                        <Input style={{ width: '200px' }} />

                        )}

                </FormItem>



                <FormItem
                    {...formItemLayout}
                    label="添加日期"

                >
                    {getFieldDecorator('addtime', config)(
                        <DatePicker />

                    )}


                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="内容"

                >
                    <Ueditor id="content" height="200" value={CompanyZixunAbout.content} />

                </FormItem>


                <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>

                    <Button style={{ marginLeft: 8 }} onClick={this.handleSubmit.bind(this)}>保存</Button>
                </FormItem>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { CompanyZixunAbout: state.reducers.CompanyZixunAbout }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}
const Modify = Form.create()(Index);
export default connect(mapStateToProps, mapDispatchToProps)(Modify);
