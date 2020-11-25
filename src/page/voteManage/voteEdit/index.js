import { Col, Input, Row, Form } from 'antd';
import React, { useState } from 'react'
import { createContainer, useContainer } from 'unstated-next';
import {colLayout_3, colLayout_2, colLayout_voteEditor_form, colLayout_voteEditor_preview } from '../../../config/colLayout';
import Ueitor from '../../../component/Ueitor'
import './index.less'

// 投票管理步骤条数据
const steps = [
    {
        index: 1,
        name: '基本信息',
        dec: '标题、时间、描述',
    },
    {
        index: 2,
        name: '选手管理',
        dec: '添加管理投票选手',
    },{
        index: 3,
        name: '自定义模版',
        dec: '广告、样式、页面排版',
    },{
        index: 4,
        name: '高级设置',
        dec: '设规则、防刷票、送礼物、强关注',
    }
]
/**
 * @type React Component
 * @description 投票管理步骤条
 */
function VoteManageStep() {

    const { currectStep, setCurrectStep } = useContainer(VoteManageStore)

    let stepSelectedIndex = 1;
    return <Row className='voteManage-step flex-between'>
            {
                steps.map(item=>{
                    return <Col {...colLayout_2}>
                    <div 
                        onClick={()=>setCurrectStep(item.index)}
                        key={item.name} 
                        className={currectStep == item.index ? 'voteManage-step-item_selected flex-row-center' : 'voteManage-step-item flex-row-center'}
                    >
                        <div className='step-index m-r-20'>{item.index}</div>
                        <div>
                            <div className='step-name'>{item.name}</div>
                            <div className='step-dec'>{item.dec}</div>
                        </div>
                    </div> </Col>
                }) 
            }
    </Row>
}
/**
 * @type React Component
 * @description 投票编辑器
 */
function VoteEditor() {
    
    const formlayout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    };

    return <div className='voteManage-vote-editor'>
        <Row>
        <Col {...colLayout_voteEditor_form} >
        <div className='editor-form'>
            <div className='editor-form-title m-b-20'>投票基本信息</div>
            <div className='m-l-5'>
                <Form {...formlayout}>
                    <Form.Item name="投票标题" label="投票标题" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Row>
                        <Col {...colLayout_3}>
                            <Form.Item style={{marginRight: 5}} name="投票开始时间" label="投票开始时间" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col {...colLayout_3}>
                            <Form.Item name="投票结束时间" label="投票结束时间" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Ueitor/>
                </Form>
            </div>
        </div>
        </Col>
        <Col {...colLayout_voteEditor_preview}>
        <div className='editor-preview'>
            手机预览
        </div>
        </Col>
    </Row>
    </div>
}
/**
 * @type React Page
 * @description 投票管理页面
 */
function VoteManage() {
    return <div className='page voteManage-page'>
        <VoteManageStep></VoteManageStep>
        <VoteEditor></VoteEditor>
    </div>
}

// VoteManage Store 数据商店
function useVoteManageStore() {
    let [currectStep, setCurrectStep] = useState(1) //  passwordLogin wechatLogin
    return { currectStep, setCurrectStep }
  }
  let VoteManageStore = createContainer(useVoteManageStore)
  export default ()=>{
    return <VoteManageStore.Provider>
      <VoteManage></VoteManage>
    </VoteManageStore.Provider>
  }
  