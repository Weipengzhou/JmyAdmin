import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';
import { Form, Input, Select, Button, Upload, Icon, message } from 'antd';
import path from '../../../url';

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


function beforeUpload(file) {
    const typeOk =
        file.type === 'image/jpeg' ||
        file.type === 'image/png' ||
        file.type === 'image/bmp' ||
        file.type === 'image/gif'
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!typeOk) {
        message.error('照片格式有误!');

    } else if (!isLt2M) {
        message.error('图片大小不得大于 2MB!');

    }

    return isLt2M && typeOk;
}
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,

        }
    }


    handleSubmit = (e) => {
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            const values = {
                ...fieldsValue,
                href:this.props.location.query.href
            };
            this.props.cunDesign(values)
         
        });

    }

    handleChange = (info) => {
        console.log(info)
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.setState({
                imageUrl: path+'/uploads/' + info.file.response.data.url,
                loading: false,
            })

        }


    }
    render() {

        const { getFieldDecorator } = this.props.form;

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>)
        const imageUrl = this.state.imageUrl;

        return (
            <div className='AddDesign'>
                <FormItem style={{display:'none'}}>
                    {getFieldDecorator('sid', {
                        initialValue: this.props.location.query.id,
                    })(
                        <Input style={{ width: '200px' }} />

                        )}

                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="照片上传">      
                    {getFieldDecorator('img', {
                        rules: [{ required: true, message: '请选择图片!' }],

                    })(
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                            action={path+"/LOGO_UPLOAD"}
                        >
                            {imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
                        </Upload>

                        )}
                       
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="姓名"
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '姓名不得为空!' }],

                    })(
                        <Input style={{ width: '200px' }} />

                        )}

                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="职位"

                >
                    {getFieldDecorator('zhiwei', {
                        rules: [{ required: true, message: '职位不得为空!' }],

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
    return {  }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}
const AddDesign = Form.create()(Index);
export default connect(mapStateToProps, mapDispatchToProps)(AddDesign);
