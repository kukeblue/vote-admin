import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { RequestConfig } from './utils/request'
import qs from 'qs';
// 配置自定义请求配置项目
RequestConfig.config.headers = {
  'content-type': 'application/x-www-form-urlencoded'
}
RequestConfig.onRequest = (data) => {
  return qs.stringify(data)
}

ReactDOM.render(
  // <React.StrictMode>
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
