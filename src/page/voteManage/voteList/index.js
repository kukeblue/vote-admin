import { Row, Col, Table, Tag } from 'antd';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { isMobile } from '../../../utils/env';
import './index.less'

const col_layout_pic = {
    lg: {span: 8},
    md: {span: 12},
    sm: {span: 24},
    xs: {span: 24}
}
const col_layout_info = {
    lg: {span: 12},
    md: {span: 12},
    sm: {span: 24},
    xs: {span: 24}
}
const col_layout_option = {
    lg: {span: 4},
    md: {span: 0},
    sm: {span: 0},
    xs: {span: 0}
}

/**
 * @type React Component
 * @description 投票列表头部
 */
function VoteListHeader() {
    const history = useHistory()
    return <div className='page-voteManageList-header flex-between'>
        <div className='text'>共<span className='m-r-5 m-l-10 color-primary'>0</span>个投票</div> 
        <div className='flex-center'> 
            <div onClick={()=>{
                history.push('/admin/voteManage/edit')
            }} className='createVote flex-center ripple'>
                <span style={{marginRight:2}} className='iconfont iconjia1'></span>创建投票
            </div>
            <div className='dropDown flex-center ripple-black'>
                筛选 <span  className='iconfont iconxia'></span>
            </div>
        </div>
    </div>
}


/**
 * @type React Component
 * @description 投票具体内容
 */
function VoteListContent() {
    const history = useHistory()

    const clickItemInPhone = () => {
        if(isMobile) {
            history.push('/admin/voteManage/edit')
        }
    }

    return <div onClick={clickItemInPhone}>
        <Row className='page-voteManageList-item flex-between'>
            <Col {...col_layout_pic}><div className='voteManageList-item-banner'></div></Col>
            <Col {...col_layout_info}><div className='voteManageList-item-info'>
                <div className='flex-row-center'>
                    <Tag color="#87d068">进行中</Tag>
                    <span className='m-l-10 voteManageList-item-info-title'>横市县中小学优秀教师评选</span>
                </div>
                <div className='m-t-20 voteManageList-item-info-time'>创建时间：2020-12-31</div>
                <div className='voteManageList-item-info-time'>开始时间：2020-12-31 —— 结束时间：2021-3-31</div>
                <div className='m-t-20 flex'>
                    <div className='icon-button'> <span className='iconfont iconshezhi'></span> 选项：0</div>
                    <div className='icon-button'> <span className='iconfont iconaixin'></span> 票数: 0</div>
                    <div className='icon-button'> <span className='iconfont iconfangwen2'></span> 访问: 0</div>
                    <div className='icon-border-button ripple-black'> <span className='iconfont iconshuaxin'></span> 刷新</div>
                </div>
            </div></Col>
            <Col {...col_layout_option}><div className='voteManageList-item-option'>
                <div className='voteManageList-item-option-item ripple-black'>活动编辑</div>
                <div className='voteManageList-item-option-item ripple-black'>统计</div>
                <div className='voteManageList-item-option-item ripple-black'>分享</div>
                <div className='voteManageList-item-option-item ripple-black'>清理</div>
            </div>
            </Col>
        </Row>
    </div>
}

/**
 * @type React Page
 * @description 投票管理页面
 */
function VoteList() {
    return  <div className='page page-voteManageList'>
        <div className='text_page-title'>管理中心</div>
        <VoteListHeader/>
        <VoteListContent/>
    </div>
}

export default VoteList;