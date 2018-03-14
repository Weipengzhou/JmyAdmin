import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';
import { Form, Input, Select, Button, Upload, Icon, message, Radio } from 'antd';


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

    componentDidMount() {
        
    }
 

    handleSubmit = (e) => {
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            const values = {
                ...fieldsValue,
            };
            this.props.newJinDuImg({ values: values, imagename: this.state.imageUrl,gid:this.props.location.query.id })

        });

    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.setState({
                imageUrl: info.file.response.data.url,
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
            <div className='BianjiGongdi'>

            
                <FormItem
                    {...formItemLayout}
                    label="封面图">
                    {getFieldDecorator('url', {
                        rules: [{ required: true, message: '请上传logo!' }],
                    })(
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                            action="http://127.0.0.1:8000/LOGO_UPLOAD"
                        >
                            {imageUrl ? <img src={'http://127.0.0.1:8000/uploads/' + imageUrl} alt="" /> : uploadButton}
                        </Upload>

                        )}
                    

                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="名称"
                >
                    {getFieldDecorator('gname', {
                        rules: [{ required: true, message: '请输入项目名称!' }],
                    })(
                        <Input style={{ width: '200px' }} />

                        )}

                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="地区"

                >
                    {getFieldDecorator('s_city', {
                        rules: [{ required: true, message: '请输入城市地区!' }],

                    })(
                        <Input style={{ width: '200px' }} />
                        )}

                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="地址"
                >
                    {getFieldDecorator('address', {
                        rules: [{ required: true, message: '请输入地址!' }],

                    })(
                        <Input style={{ width: '200px' }} />

                        )}


                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="面积"
                >
                    {getFieldDecorator('area', {
                        rules: [{ required: true, message: '请输入面积!' }],

                    })(
                        <Input style={{ width: '200px' }} />

                        )}


                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="价格"

                >
                    {getFieldDecorator('price', {
                        rules: [{ required: true, message: '请输入价格!' }],

                    })(

                        <Input style={{ width: '200px' }} />

                        )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="类型"

                >
                    {getFieldDecorator('leixing', {
                        rules: [{ required: true, message: '请选择装修类型!' }],

                    })(

                        <Radio.Group  >
                            <Radio value="0">半包</Radio>
                            <Radio value="1">全包</Radio>

                        </Radio.Group>

                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="施工进度"

                >
                    {getFieldDecorator('overstatus', {
                       
                        rules: [{ required: true, message: '请选择装修阶段!' }],
                    })(

                        <Radio.Group  >
                            <Radio value="1">准备开工</Radio>
                            <Radio value="2">水电阶段</Radio>
                            <Radio value="3">泥木阶段</Radio>
                            <Radio value="4">油漆阶段</Radio>
                            <Radio value="5">竣工阶段</Radio>

                        </Radio.Group>

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
    return { gongdiMessage: state.reducers.gongdiMessage }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}
const AddGongdi = Form.create()(Index);
export default connect(mapStateToProps, mapDispatchToProps)(AddGongdi);
