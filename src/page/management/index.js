import { Table } from 'antd'
import React from 'react'
import './index.less'

/**
 * @type React Component
 * @description 状态仪表盘（快速跳转）
 */
function Dashboard() {
    return <div className='flex-between dashboard'>
        <div className='dashboard-card bg-primary'>
            <div className='dashboard-card-activityCount'>5</div>
            <div className='dashboard-card-activityDec'>还未开始投票活动</div>
        </div>
        <div className='dashboard-card'>
            <div className='dashboard-card-activityCount'>1</div>
            <div className='dashboard-card-activityDec'>正在进行中的活动</div>
        </div>
        <div className='dashboard-card'>
            <div className='dashboard-card-activityCount'>258</div>
            <div className='dashboard-card-activityDec'>投票选手合计数量</div>
        </div>
        <div className='dashboard-card'>
            <div className='dashboard-card-activityCount'>5</div>
            <div className='dashboard-card-activityDec'>已结束的投票活动</div>
        </div>
    </div>
}

/**
 * @type React Component
 * @description 最近活动
 */
function LatestActivity() {
    const columns = [
        {
            title: '标题',
            dataIndex: '标题',
            render: (text)=>{<div className='management-table-title'>{text}</div>}
        },
        {
            title: '选手数量',
            dataIndex: '选手数量',
        },
        {
            title: '投票数',
            dataIndex: '投票数',
        },
        {
            title: '访问数',
            dataIndex: '访问数',
        },
        {
            title: '状态',
            dataIndex: '状态',
        },
        {
            title: '活动时间',
            dataIndex: '活动时间',
        },
        {
            title: '操作',
            dataIndex: '操作',
        },
      ] 
    return <div className='latestActivity'>
        <div className='latestActivity-header flex-between'>
            <div>最新活动</div>
            <div className='flex-center'>
                <div className='m-r-10 flex-center latestActivity-header-option-votemange'>
                    <span className='iconfont iconcaidan latestActivity-header-option-icon'></span>
                    投票管理
                </div>
                <div className='flex-center latestActivity-header-option-create ripple'>
                    <span className='iconfont iconjia latestActivity-header-option-icon ' ></span>
                    创建投票
                </div>
            </div>
        </div>
        <div className='latestActivity-content'>
            <Table dataSource={[]} columns={columns}/>
        </div>
    </div>
}

/**
 * @type React Component
 * @description 我的资料
 */
function MyInformation() {
    return <div>
    <div className='text_page-title'>我的资料</div>
        <div className='setting-dashboard flex-between'>
            <div className='setting-dashboard-card flex-between'>
                <div className='flex-center'>
                    <div className='text_weight m-r-10'>公众号授权:</div>
                    <div className='text_dec'>暂未绑定（非关注投票无需授权）</div>
                </div>
                <div className='flex-center setting-dashboard-card-button ripple'>
                    公众号授权
                </div>
            </div>
            <div className='setting-dashboard-card flex-between'>
                <div className='flex-center'>
                    <div className='text_weight m-r-10'>绑定微信:</div>
                    <div className='text_dec'>扫码绑定后可收到动态推送</div>
                </div>
                <div className='flex-center setting-dashboard-card-button  ripple'>
                    点击绑定
                </div>
            </div>
        </div>
    </div>
}

/**
 * @type React Component
 * @description 文章
 */
function Acticle() {
    return <div className='article-block'>
        <div className='article-block-column'>
            <div className='article-block-column-header flex-between'>
                <div className='flex-center article-block-column-header-title'>平台公告</div>
                <div className='m-r-10 flex-center article-block-seemore'>
                    <span className='iconfont iconcaidan latestActivity-header-option-icon'></span>
                    查看更多
                </div>
            </div>
            <div className='acticle-block-content m-t-20'>
                <div className='acticle-list-item flex-between text_dec'>
                    <div>报名选手如何添加视频</div>
                    <div>2020-06-26 18:29:38</div>
                </div>
                <div className='acticle-list-item flex-between text_dec'>
                    <div>报名选手如何添加视频</div>
                    <div>2020-06-26 18:29:38</div>
                </div>
                <div className='acticle-list-item flex-between text_dec'>
                    <div>报名选手如何添加视频</div>
                    <div>2020-06-26 18:29:38</div>
                </div>
            </div>
        </div>
        <div className='article-block-column'>
            <div className='article-block-column-header flex-between'>
                <div className='flex-center article-block-column-header-title'>使用教程</div>
                <div className='m-r-10 flex-center article-block-seemore'>
                    <span className='iconfont iconcaidan latestActivity-header-option-icon'></span>
                    查看更多
                </div>
            </div>
        </div>
    </div>
}



/**
 * @type React Page
 * @description 管理中心
 */
function Management(props) {
   
  return (
    <div className='page management-page'>
        <div className='text_page-title'>管理中心</div>
        {/* 各个状态活动快速跳转 */}
        <Dashboard/>
        {/* 最近活动 */}
        <LatestActivity/>
        {/* 我的资料 */}
        <MyInformation/>
        {/* 最新资讯 */}
        <Acticle/>
    </div>
  );
}

export default Management;
