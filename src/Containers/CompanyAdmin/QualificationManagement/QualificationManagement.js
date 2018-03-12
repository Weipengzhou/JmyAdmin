import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';
import { Upload, Icon, Modal, Form,  message } from 'antd';



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
            previewVisible: false,
            previewImage: '',
            fileList:[],
        };
        
    }
   
    componentDidMount(){
        this.props.getZizhi(this.props.location.query.id)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.fileList !== null) {
            this.setState({
                fileList: nextProps.fileList
            });
        }

    }
    handleCancel = () => (
        this.setState({ previewVisible: false })
    );
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleChange = (info) => {
        let abc = info.file.response
    
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.props.addZizhi({ lei: this.props.location.query.id, url: abc.data.url})
        
        }
        this.setState({ fileList:info.fileList });
        
    }
    
    handleRemove=(e)=>{
       this.props.delZizhi(e.uid)
    }

    render() {
        const { previewVisible, previewImage, fileList} = this.state;
        
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className='QualificationManagement'>
                <Upload
                    action="http://127.0.0.1:8000/ZIZHI_UPLOAD"
                    name="avatar"
                    listType="picture-card"
                    fileList={fileList}
                    beforeUpload={beforeUpload}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    onRemove={this.handleRemove}
                >
                    {fileList.length >= 4 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { fileList: state.reducers.fileList }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}
const QualificationManagement = Form.create()(Index);
export default connect(mapStateToProps, mapDispatchToProps)(QualificationManagement);
