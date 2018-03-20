import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/actions';
import { Upload, Icon, Modal, Form, message } from 'antd';
import './JinDu.less';
import path from '../../../url';

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
            jinDuImgOne: [],
            jinDuImgTwo: [],
            jinDuImgThree: [],
            jinDuImgFour: [],
            jinDuImgFive: [],
        };

    }

    componentDidMount() {
        this.props.getJinDuImg(this.props.location.query.gid)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.jinDuImg !== null) {
            this.setState({
                jinDuImgOne: nextProps.jinDuImg.one,
                jinDuImgTwo: nextProps.jinDuImg.two,
                jinDuImgThree: nextProps.jinDuImg.three,
                jinDuImgFour: nextProps.jinDuImg.four,
                jinDuImgFive: nextProps.jinDuImg.five,
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
 
    handleChangeOne = (info) => {
        let abc = info.file.response
        if (info.file.status === 'done') {
            this.props.cunJinDuImg({ lei: this.props.location.query.gid, url: abc.data.url,jd:'one',overstatus:'1' })
        }
        this.setState({ jinDuImgOne: info.fileList });
    }
    handleChangeTwo = (info) => {
        let abc = info.file.response
        if (info.file.status === 'done') {
            this.props.cunJinDuImg({ lei: this.props.location.query.gid, url: abc.data.url, jd: 'two', overstatus: '2' })
        }
        this.setState({ jinDuImgTwo: info.fileList });
    }
    handleChangeThree = (info) => {
        let abc = info.file.response
        if (info.file.status === 'done') {
            this.props.cunJinDuImg({ lei: this.props.location.query.gid, url: abc.data.url, jd: 'three', overstatus: '3' })
        }
        this.setState({ jinDuImgThree: info.fileList });
    }
    handleChangeFour = (info) => {
        let abc = info.file.response
        if (info.file.status === 'done') {
            this.props.cunJinDuImg({ lei: this.props.location.query.gid, url: abc.data.url, jd: 'four', overstatus: '4' })
        }
        this.setState({ jinDuImgFour: info.fileList });
    }
    handleChangeFive = (info) => {
        let abc = info.file.response
        if (info.file.status === 'done') {
            this.props.cunJinDuImg({ lei: this.props.location.query.gid, url: abc.data.url, jd: 'five', overstatus: '5' })
        }
        this.setState({ jinDuImgFive: info.fileList });     
    }
    handleRemove = (e) => {
      this.props.delJinDuImg(e.uid)
    }   

    render() {
        const { previewVisible, previewImage, jinDuImgOne, jinDuImgTwo, jinDuImgThree, jinDuImgFour, jinDuImgFive} = this.state;

        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
    
        return (
            <div className='JinDu'>
                <p>准备开工</p>
                <Upload
                    action={path+"/ZIZHI_UPLOAD"}
                    name="avatar"
                    listType="picture-card"
                    fileList={jinDuImgOne}
                    beforeUpload={beforeUpload}
                    onPreview={this.handlePreview}
                    onChange={this.handleChangeOne}
                    onRemove={this.handleRemove}
                >
                    {jinDuImgOne.length >= 5 ? null : uploadButton}
                </Upload>
                <p>水电阶段</p>
                <Upload
                    action={path+"/ZIZHI_UPLOAD"}
                    name="avatar"
                    listType="picture-card"
                    fileList={jinDuImgTwo}
                    beforeUpload={beforeUpload}
                    onPreview={this.handlePreview}
                    onChange={this.handleChangeTwo}
                    onRemove={this.handleRemove}
                >
                    {jinDuImgTwo.length >= 5 ? null : uploadButton}
                </Upload>
                <p>泥木阶段</p>
                <Upload
                    action={path+"/ZIZHI_UPLOAD"}
                    name="avatar"
                    listType="picture-card"
                    fileList={jinDuImgThree}
                    beforeUpload={beforeUpload}
                    onPreview={this.handlePreview}
                    onChange={this.handleChangeThree}
                    onRemove={this.handleRemove}
                >
                    {jinDuImgThree.length >= 5 ? null : uploadButton}
                </Upload>
                 <p>油漆阶段</p>
                <Upload
                    action={path+"/ZIZHI_UPLOAD"}
                    name="avatar"
                    listType="picture-card"
                    fileList={jinDuImgFour}
                    beforeUpload={beforeUpload}
                    onPreview={this.handlePreview}
                    onChange={this.handleChangeFour}
                    onRemove={this.handleRemove}
                >
                    {jinDuImgFour.length >= 5 ? null : uploadButton}
                </Upload>
                <p>竣工阶段</p>
                <Upload
                    action={path+"/ZIZHI_UPLOAD"}
                    name="avatar"
                    listType="picture-card"
                    fileList={jinDuImgFive}
                    beforeUpload={beforeUpload}
                    onPreview={this.handlePreview}
                    onChange={this.handleChangeFive}
                    onRemove={this.handleRemove}
                >
                    {jinDuImgFive.length >= 5 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { jinDuImg: state.reducers.jinDuImg }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}
const JinDu = Form.create()(Index);
export default connect(mapStateToProps, mapDispatchToProps)(JinDu);
