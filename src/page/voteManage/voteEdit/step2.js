import React from 'react'
import { Button, Alert, Table } from 'antd'

/**
 * @type React Component
 * @description 步骤二选手列表
 */
function Step2Table() {
    const columns = [
        {
            title: '封面',
            dataIndex: '封面',
            render: (text)=>{<div className='voteEdit-playerTable-avatar'>{text}</div>}
        },
        {
            title: '设置项',
            dataIndex: '设置项',
        },
        {
            title: '选手数据',
            dataIndex: '选手数据',
        },
        {
            title: '操作',
            dataIndex: '操作',
        },
    ] 

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
        //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
        //   name: record.name,
        }),
    };
    return <div className='voteEdit-playerTable m-t-20'>
        <div className='flex-row-between voteEdit-playerTable-header'>
            <div className='flex-center'>
                <div className='text_title m-r-10'>选手列表(共5位)</div>
                <Button>本页排序 <span style={{fontSize: 15}} className='iconfont iconxia'></span></Button>
            </div>
            <Button type="primary">搜索</Button>
        </div>
        <Alert message="如需使用用户自主在线报名，请到高级设置" type="warning" showIcon closable />
        <div className='m-t-10'>
            <Table 
            rowSelection={{
                type: 'checkbox',
                ...rowSelection,
            }}
            scroll={{ x: 730 }} dataSource={[]} columns={columns}/>
        </div>
    </div>
}

/**
 * @type React Component
 * @description 投票编辑步骤二
 */
function Step2Header() {
    return <div className='voteEdit-step2 m-t-5'> 
        <div className='voteEdit-step2-header flex-wrap'>
            <Button className='m-r-5 m-b-10' style={{backgroundColor: '#45AAF2', borderColor: '#45AAF2'}} type="primary">添加选手</Button>
            <Button className='m-r-5 m-b-10' style={{backgroundColor: '#2BCBBA', borderColor: '#2BCBBA'}}  type="primary">分组管理</Button>
            <Button className='m-r-5 m-b-10' style={{backgroundColor: '#5EBA00', borderColor: '#5EBA00'}}  type="primary">批量添加选手</Button>
            <Button className='m-r-5 m-b-10'>筛选 <span style={{fontSize: 15}} className='iconfont iconxia'></span></Button>
            <Button className='m-r-5 m-b-10'>操作 <span style={{fontSize: 15}} className='iconfont iconxia'></span></Button>
            <Button className='m-r-5 m-b-10'>活动页面选手显示数</Button>
            <Button className='m-r-5 m-b-10'>活动页面页面排列方式</Button>
        </div>
    </div>
}

/**
 * @type React Component
 * @description 投票编辑步骤二
 */
function Step2() {
    return <div className='voteEdit-step2 m-t-5'> 
        <Step2Header/>
        <Step2Table></Step2Table>
        <div className='flex-center m-t-20'>
            <Button className='m-r-10'>上一步</Button>
            <Button className='m-r-10' type="primary">自定义模版</Button>
            <Button className='m-r-10' type="primary">发布活动</Button>
        </div>
    </div>
}

export default Step2