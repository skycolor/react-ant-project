import React from 'react';
import {connect} from 'react-redux'

import { Alert , Divider , Modal, Button , message , notification } from 'antd';

import Bread from '../include/bread'

const confirm = Modal.confirm;
const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};
const success = () => {
  message.success('This is a message of success');
};
const error = () => {
  message.error('This is a message of error');
};
const warning = () => {
  message.warning('This is message of warning');
};

class AlertPage extends React.Component {
  constructor(props) {
    super(props);
  }
  info(){
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }
  success(){
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  }
  error(){
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }
  warning(){
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }
  showConfirm(){
    confirm({
      title: 'Do you want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }
  render() {
    return (
      <div className="alert-container" >
          <Bread desArr={["ant" , "弹出框"]} iconType="file-text" />
          <div className="info1" >
              <Alert message="Success Tips" type="success" showIcon />
              <Alert message="Informational Notes" type="info" showIcon />
              <Alert message="Warning" type="warning" showIcon />
              <Alert message="Error" type="error" showIcon />
              <Alert
                message="Success Tips"
                description="Detailed description and advices about successful copywriting."
                type="success"
                showIcon
              />
              <Alert
                message="Informational Notes"
                description="Additional description and informations about copywriting."
                type="info"
                showIcon
              />
              <Alert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
              />
              <Alert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
              />
          </div>
          <Divider>这是华丽的分界线</Divider>
          <div className="info2" >
              <Button onClick={this.info}>Info</Button>
              <Button onClick={this.success}>Success</Button>
              <Button onClick={this.error}>Error</Button>
              <Button onClick={this.warning}>Warning</Button>
              <Button onClick={this.showConfirm}>Confirm</Button>
          </div>
          <Divider dashed >这是豆豆分界线</Divider>
          <div className="info3" >
              <Button onClick={success}>Success</Button>
              <Button onClick={error}>Error</Button>
              <Button onClick={warning}>Warning</Button>
          </div>
          <Divider>over</Divider>
          <div className="info4" >
              <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
              <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
              <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
              <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
          </div>
      </div>
    )
  }
}

//导入样式
require('../../styles/ant/alert.scss')

export default connect()(AlertPage)
