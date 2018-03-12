import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';
import { Form, Input, Select, Button, Upload, Icon, message  } from 'antd';


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
                this.props.xiuGaicom(this.props.location.query.id)
                
            }
            componentWillReceiveProps(nextProps) {
             
                if (nextProps.c_content.imagename!==null){
                    this.setState({
                        imageUrl:  nextProps.c_content.imagename
                    });
                }
               
            }

            handleSubmit = (e) => {
                this.props.form.validateFields((err, fieldsValue) => {
                    if (err) {
                        return;
                    }
                    const values = {
                        ...fieldsValue,
                    };       
                    
                    this.props.adminGaicom({ values: values, imagename: this.state.imageUrl})
               
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
            <div className='BasicInformation'>
              
          
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
                    label="公司LOGO">
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
                   
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="公司名称"
                >
                    {getFieldDecorator('cname', {
                        initialValue: this.props.c_content.cname + '',

                    })(
                        <Input style={{ width: '200px' }} />

                        )}

                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="地区"

                >
                    {getFieldDecorator('s_city', {
                        initialValue: this.props.c_content.s_city + '',

                    })(
                         <Input style={{ width: '200px' }} />
                        )}

                </FormItem>
                
                <FormItem
                    {...formItemLayout}
                    label="联系人"
                >
                    {getFieldDecorator('lianxiren', {
                        initialValue: this.props.c_content.lianxiren + '',

                    })(
                        <Input style={{ width: '200px' }} />

                        )}


                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="固定电话"
                >
                    {getFieldDecorator('tel', {
                        initialValue: this.props.c_content.tel + '',

                    })(
                        <Input style={{ width: '200px' }} />

                        )}


                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="手机"
                >
                    {getFieldDecorator('mobile', {
                        initialValue: this.props.c_content.mobile + '',

                    })(
                        <Input style={{ width: '200px' }} />

                        )}


                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="详细地址"
                >
                    {getFieldDecorator('dizhi', {
                        initialValue: this.props.c_content.dizhi + '',

                    })(
                        <Input style={{ width: '200px' }} />

                        )}


                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="承接价位"

                >
                    {getFieldDecorator('jiawei', {
                        initialValue: this.props.c_content.jiawei + '',

                    })(

                        <Select

                            placeholder=""
                            style={{
                                margin: '8px 0', width: '200px'
                            }}

                        >
                            <Option value="5w以下">5w以下</Option>
                            <Option value="5w-10w">5w-10w</Option>
                            <Option value="10w-20w">10w-20w</Option>
                            <Option value="20w以上">20w以上</Option>
                        </Select>

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
    return { c_content: state.reducers.c_content}
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}
const BasicInformation = Form.create()(Index);
export default connect(mapStateToProps, mapDispatchToProps)(BasicInformation);

