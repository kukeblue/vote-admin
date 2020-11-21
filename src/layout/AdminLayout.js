import React, { useEffect } from 'react'
import GobalStore from '../store/gobalStore'
import "./AdminLayout.less"
import image_logo from '../assets/images/logo2.png'
import image_message from '../assets/images/message.png'
import {Badge} from 'antd'

/**
 * @description 全局头部组件
 * @type React Component
 * @returns React.Dom
 */
function Header() {
  return <div className='layout-header'>
    <div className='layout-header-content flex-row-between'>
      <img alt='' className='layout-header-logo' src={image_logo}></img>
      <div className='flex-center'>
        <Badge dot className='m-r-20'>
          <img alt='' className='layout-header-message' src={image_message}></img>
        </Badge>
        <img alt='' className='avatar m-r-5'/>
        <div className='flex-column-all-center'>
          <div className='layout-header-username'>马老师</div>
          <div className='layout-header-userVersion flex'>专业版</div>
        </div>
      </div>
    </div>
  </div>
}

/**
 * @description nav导航组件
 * @type React Component
 * @returns React.Dom
 */
function Nav() {
  return <div className='layout-menu'>
    <div className='layout-menu-content flex-between'>
      <a className="layout-menu-item_selected">管理中心</a>
      <a className="layout-menu-item">投票管理</a>
      <a className="layout-menu-item">专题展示</a>
      <a className="layout-menu-item">账户升级</a>
      <a className="layout-menu-item">财务升级</a>
      <a className="layout-menu-item">账户信息</a>
      <a className="layout-menu-item">开放API</a>
    </div>
  </div>
}



function AdminLayout(props) {
  let gobalStore = GobalStore.useContainer()
  useEffect(()=>{
  }, [])
  return (
    <div className='layout'>
      <Header></Header>
      <Nav></Nav>
      <div>{gobalStore.token}</div>
      <div className='flex-column-center layout-content-wrap'>
        <div className='layout-content'>
          {props.children}
        </div>
      </div>
      <div className='layout-footer flex-center'>
        <div className='layout-footer-content'>
        <div>
          <a>官网首页</a>   
          <a>用户协议</a>
          <a>帮助中心</a>
          <a>案例参考</a>
        </div>
        <div className='footer-bank'>© CopyRight 2013-2020,All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
