import { Col, Input, Row, Form, Button } from 'antd';
import React from 'react'
import {
    colLayout_3, 
    colLayout_template,
    colLayout_editor
} from '../../../config/colLayout';
import Ueitor from '../../../component/Ueitor'
import './index.less'


/**
 * @type React Component
 * @description 文章模版
 */
function ArticleTemplate() {
    return <div className='voteEdit-article-template'>
        <div className='flex-center article-template-header'>文章模版</div>
        <div className='flex-column-center p-t-20'>
            <div className='article-template-item'></div>
        </div>
    </div>
}

/**
 * @type React Component
 * @description 投票编辑器
 */
const formlayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
};
function VoteEditor() {
    
    return <div className='editor-form'>
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
                    <Row>
                        <Col {...colLayout_editor}>
                            <Ueitor/>
                            <div className='flex-center m-t-20'>
                                <Button className='m-r-20 m-l-80'>返回</Button>
                                <Button type="primary">下一步</Button>
                            </div>
                        </Col>
                        <Col  {...colLayout_template}>
                            <ArticleTemplate></ArticleTemplate>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
       
}


export default VoteEditor