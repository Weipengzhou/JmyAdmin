import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';
import { Form, Input, Select, Button, Upload, Icon, message, Radio } from 'antd';
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

    componentDidMount() {
        this.props.getGongdiMessage(this.props.location.query.gid)
    }
    componentWillReceiveProps(nextProps) {

        if (nextProps.gongdiMessage.imagename !== null) {
            this.setState({
                imageUrl: nextProps.gongdiMessage.imagename
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
            this.props.gaiGongdiMessage({ values: values, imagename: this.state.imageUrl })
            console.log(values)
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

                <FormItem style={{display:'none'}}
                    {...formItemLayout}
                    label="id"
                >

                    {getFieldDecorator('id', {
                        initialValue: this.props.gongdiMessage.id,

                    })(
                        <Input style={{ width: '200px' }} disabled />

                        )}

                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="封面图">
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                        action={path+"/LOGO_UPLOAD"}
                    >
                        {imageUrl ? <img src={path +'/Upload/' + imageUrl} alt="" /> : uploadButton}
                    </Upload>

                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="名称"
                >
                    {getFieldDecorator('gname', {
                        initialValue: this.props.gongdiMessage.gname,

                    })(
                        <Input style={{ width: '200px' }} />

                        )}

                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="地区"

                >
                    {getFieldDecorator('s_city', {
                        initialValue: this.props.gongdiMessage.s_city ,

                    })(
                        <Input style={{ width: '200px' }} />
                        )}

                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="地址"
                >
                    {getFieldDecorator('address', {
                        initialValue: this.props.gongdiMessage.address ,

                    })(
                        <Input style={{ width: '200px' }} />

                        )}


                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="面积"
                >
                    {getFieldDecorator('area', {
                        initialValue: this.props.gongdiMessage.area,

                    })(
                        <Input style={{ width: '200px' }} />

                        )}


                </FormItem>
               
                <FormItem
                    {...formItemLayout}
                    label="价格"

                >
                    {getFieldDecorator('price', {
                        initialValue: this.props.gongdiMessage.price ,

                    })(

                        <Input style={{ width: '200px' }} />

                        )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="类型"

                >
                    {getFieldDecorator('leixing', {
                        initialValue: this.props.gongdiMessage.leixing + '',

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
                        initialValue: this.props.gongdiMessage.overstatus + '',

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
const BianjiGongdi = Form.create()(Index);
export default connect(mapStateToProps, mapDispatchToProps)(BianjiGongdi);
