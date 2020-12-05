import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import './index.less'
import Logo from '../../component/Logo/index'
import image_wechat from '../../assets/images/wechat.png'
import { createContainer, useContainer } from "unstated-next"
import { Link } from 'react-router-dom';
/**
 * 账号密码登录板块
 */
function LoginForm() {
  const {setLoginType} = useContainer(LoginStore)

  return <div>
      <div className='p-loginFormCard-title flex-center'>用户登录</div>
      <Form
        labelCol={{ span: 24  }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item label='手机号' >
          <Input placeholder='请输入手机号' className='p-loginFormCard-input'/>
        </Form.Item>
        <Form.Item label='密码'>
          <Input placeholder='请输入密码' className='p-loginFormCard-input'/>
        </Form.Item>
        <Button className='p-loginFormCard-button m-t-10' type="primary"> 登录 </Button>
        <a onClick={()=>setLoginType('wechatLogin')} className='flex-center m-t-20'>
          <img className='wechat-logo' src={image_wechat}></img>
          <span className='p-wechat-login'>微信扫码登录</span>
        </a>
      </Form>
    </div>
}
/**
 * 底部link
 */
function BottomLink() {
  return <div>
    <div className='flex-center m-t-30'>
      <a className='p-loginLink'>返回首页</a>
      <Link to='/user/register'><a className='p-loginLink'>注册账号</a></Link>
    </div>
    <div className='flex-center band'>
    © CopyRight 2013-2020,All Rights Reserved.
    </div>
  </div>
}
/**
* 微信扫码登录
*/
function WechatLogin() {
  const { setLoginType } = useContainer(LoginStore)
  return <div>
    <div className='p-loginFormCard-title flex-center'>微信扫码登录</div>
    <div className='p-login-qrcode'></div>
    <h4 className='flex-center m-t-20'>请用手机微信扫一扫功能扫码登录</h4>
    <a onClick={()=>{
      setLoginType('passwordLogin')
    }} className='p-change-password-login flex-center m-t-20'>
      <span className='iconfont iconedit'></span>
      账号密码登录
    </a>
  </div>
}
/**
 * 登录Page
 */
function Login(props) {
  const {loginType} = useContainer(LoginStore)
  return (
    <div className='page flex-column-all-center'>
        <Logo></Logo>
        {/* 登录卡片 */}
        <div className='p-loginFormCard'>
          {loginType == 'wechatLogin' ? WechatLogin() : LoginForm()}
        </div>
        {BottomLink()}
    </div>
  );
}


function useLoginStore() {
  let [loginType, setLoginType] = useState('passwordLogin') //  passwordLogin wechatLogin
  return { loginType, setLoginType }
}
let LoginStore = createContainer(useLoginStore)
export default ()=>{
  return <LoginStore.Provider>
    <Login></Login>
  </LoginStore.Provider>
}

