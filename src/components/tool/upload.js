import React from 'react';
import {connect} from 'react-redux'

import { Row , Col , Upload, message, Button, Icon , Divider} from 'antd';

import Bread from '../include/bread'

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class UploadPage extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    loading: false,
  };
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <div className="upload-container" >
          <Bread desArr={[ "工具" , "上传"]} iconType="tool" />
          <div className="tit" >
            ant design也是支持很多上传功能，十分强大！！！
          </div>
          <Row>
            <Col span={12}>
                <Upload {...props}>
                  <Button>
                    <Icon type="upload" /> Click to Upload
                  </Button>
                </Upload>
            </Col>
            <Col span={12}>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                  >
                    {imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
                  </Upload>
            </Col>
          </Row>
          <Divider>还有很多其它的demo，就不一一放这了</Divider>
      </div>
    )
  }
}

//导入样式
require('../../styles/tool/upload.scss')

export default connect()(UploadPage)
