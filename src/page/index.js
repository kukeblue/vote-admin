import React, { useEffect } from 'react'
import PreSelectInput from '../component/Form/PreSelectInput'
import './index.less'
import { Card } from 'antd';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


function Index() {

  const props = {
    accept:".doc,.docx,.pdf",
    name: 'file',
    action: '/api/paper/upload',
    headers: {
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

  return (
    <div className='page'>
        <div className='m-t-30'>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </div>
    </div>
  );
}

export default Index;
