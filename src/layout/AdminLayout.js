import React, { useEffect, useState } from 'react'
import GobalStore from '../store/gobalStore'
import "./AdminLayout.less"
import image_logo from '../assets/images/logo2.png'
import image_message from '../assets/images/message.png'
import {Badge} from 'antd'
import { useHistory } from "react-router-dom";
import { createContainer, useContainer } from 'unstated-next'
/**
 * @description 全局头部组件
 * @type React Component
 * @returns React.Dom
 */
function Header() {
  const { phoneNavSpread, setPhoneNavSpread } = useContainer(AdminLayoutStroe) 
  // 点击手机端Nav展开控制器
  const onClickPhoneNavCtl = () => {
      setPhoneNavSpread(!phoneNavSpread)

  }
  return <div  className='layout-header'>
    <div className='layout-header-content flex-row-between'>
      <img onClick={()=>{
        window.location.href = "/"
      }} alt='' className='layout-header-logo' src={image_logo}></img>
      <div className='flex-center'>
        <Badge dot className='m-r-20'>
          <img alt='' className='layout-header-message' src={image_message}></img>
        </Badge>
        <img alt='' className='avatar m-r-5'/>
        <div className='flex-column-all-center user-info_pc'>
          <div className='layout-header-username'>马老师</div>
          <div className='layout-header-userVersion flex'>专业版</div>
        </div>
        <a href="#page-header"><span onClick={onClickPhoneNavCtl} className='nemu-button_phone iconcaidan1 iconfont'></span></a>
      </div>
    </div>
  </div>
}
const paths = [
  {
    path:'/admin/management',
    name:'管理中心',
  },
  {
    path:'/admin/voteManage',
    name:'投票管理',
  },
  {
    path: '/admin/series/seriesList',
    name:'投票专题',
  },
  {
    path: '/admin/accountUpgrade',
    name:'账户升级',
  }
]
/**
 * @description nav导航组件
 * @type React Component
 * @returns React.Dom
 */
function Nav() {
  let history = useHistory();
  return <div className='layout-menu'>
    <div className='layout-menu-content flex-between'>
      {
        paths.map(item=>{
          return <a key={item.path} href={item.path} className={ history.location.pathname.includes(item.path.split('/')[2]) ? "layout-menu-item_selected" : "layout-menu-item"}>{item.name}</a>
        })
      }
      {/* <a className="layout-menu-item">专题展示</a> */}
      <a className="layout-menu-item">财务升级</a>
      <a className="layout-menu-item">账户信息</a>
      <a className="layout-menu-item">开放API</a>
    </div>
  </div>
}
/**
 * @description nav导航组件手机版本
 * @type React Component
 * @returns React.Dom
 */
function PhoneNav() {
  let history = useHistory();

  const { phoneNavSpread } = useContainer(AdminLayoutStroe) 
  const navAnimationClass =  (phoneNavSpread !== undefined) ? phoneNavSpread ? 'layout-phoneNav_spread' : 'layout-phoneNav_packup' : ''
  console.log(phoneNavSpread)
  return <div  className={`layout-phoneNav ${navAnimationClass}`}>
      <div  className='layout-phoneNav-content'>
        {
          paths.map(item=>{
            return <a className={ history.location.pathname.includes(item.path.split('/')[2]) ? "layout-phoneNav-item_selected" : "layout-phoneNav-item"} key={item.path} href={item.path}>{item.name}</a>
          })
        }
        <a className='layout-phoneNav-item'>财务升级</a>
        <a className='layout-phoneNav-item'>账户信息</a>
        <a className='layout-phoneNav-item'>开放API</a>
      </div>
  </div>
}
/**
 * @description Layout底部
 * @type React Component
 * @returns React.Dom
 */
function LayoutFooter() {
  return <div className='layout-footer flex-center'>
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
}

function AdminLayout(props) {
  let gobalStore = GobalStore.useContainer()
  useEffect(()=>{
  }, [])
  return (
    <div className='layout'>
      {/* 顶部吸顶器 */}
      <div id='page-header' style={{height: 72, backgroundColor: '#3E3A39'}}></div>
      <Header></Header>
      <Nav></Nav>
      <PhoneNav></PhoneNav>
      <div className='flex-column-center layout-content-wrap'>
        <div className='layout-content'>
          {props.children}
        </div>
      </div>
      <LayoutFooter></LayoutFooter>
    </div>
  );
}

// VoteManage Store 数据商店
function useAdminLayoutStroe() {
  const [phoneNavSpread, setPhoneNavSpread] = useState(); // 1 张开  2  收起
  return { phoneNavSpread, setPhoneNavSpread }
}
let AdminLayoutStroe = createContainer(useAdminLayoutStroe)
export default (props)=>{
  return <AdminLayoutStroe.Provider>
    <AdminLayout>
        {props.children}
    </AdminLayout>
  </AdminLayoutStroe.Provider>
}

