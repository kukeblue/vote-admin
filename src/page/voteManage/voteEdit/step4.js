
import React from 'react'
import { Radio, Input, Row, Col, Form, Switch, Select, TimePicker, Alert, InputNumber} from 'antd'
import { colLayout_1, colLayout_4} from '../../../config/colLayout'
const { RangePicker } = TimePicker;
const { TextArea } = Input;
/**
 * @type React Component
 * @description 规则设置
 */
function VoteRuleSetting() {
    return  <div className='voteEdit-settingBlock m-t-30'>
        <div className='setting-header flex-row-center'>
            <div className='text_title'>投票规则</div>
            {/* <div className='text_dec m-l-10'>关闭活动后该活动将不能访问、不能投票。</div> */}
        </div>
        <div className='setting-content'>
            <div className='step-form-label'>投票类型</div>
            <div>
                <Radio.Group value='1'>
                    <Radio value='1'>单选投票</Radio>
                    <Radio value='2'>多选投票</Radio>
                    <Radio value='3'>必选投票</Radio>
                </Radio.Group>
                <div className='text_dec2 flex-row-center m-t-20 m-l-25'>
                    <div>必须选择</div>
                    <div className='m-l-10 m-r-10'>
                        <Input style={{width: '100px'}}></Input>
                    </div>
                    <div>位选手</div>
                </div>
            </div>
            <div className='step-form-label m-t-20'>投票规则</div>
            <div className='m-b-30'>
                <Radio.Group value='1'>
                    <Radio value='1'>固定次数</Radio>
                    <Radio value='2'>周期次数</Radio>
                </Radio.Group>
                <div className='text_dec2 flex-row-center m-t-20 m-l-25'>
                    <div>每个微信号整个活动期间只能投</div>
                    <div className='m-l-10 m-r-10'>
                        <Input style={{width: '100px'}}></Input>
                    </div>
                    <div>次</div>
                </div>
            </div>
        </div>
    </div>
}
/**
 * @type React Component
 * @description 分享设置
 */
function ShareSetting() {
    return <div className='voteEdit-settingBlock m-t-30'>
        <div className='setting-header flex-row-center'>
            <div className='text_title'>分享设置</div>
            {/* <div className='text_dec m-l-10'>关闭活动后该活动将不能访问、不能投票。</div> */}
        </div>
        <div className='setting-content'>
            <Row>
                <Col className='m-b-15' {...colLayout_1}>
                    <div className='step-form-label_small m-b-5'>允许分享</div>
                    <div>
                        <Radio.Group value='1'>
                            <Radio value='1'>允许分享</Radio>
                            <Radio value='2'>禁止分享</Radio>
                        </Radio.Group>
                    </div>
                </Col>
                <Col className='m-b-15' {...colLayout_1}>
                    <div className='step-form-label_small m-b-5'>选手分享</div>
                    <div>
                        <Radio.Group value='1'>
                            <Radio value='1'>开启</Radio>
                            <Radio value='2'>关闭</Radio>
                        </Radio.Group>
                    </div>
                </Col>
            </Row>
            <Row >
                <Col {...colLayout_1}>
                    <div className='m-r-10'>
                        <div className='step-form-label_small m-b-5 m-t-10'>自定义分享标题</div>
                        <Input />
                    </div>
                </Col>
                <Col {...colLayout_1}>
                    <div className='m-r-10'>
                        <div className='step-form-label_small m-b-5 m-t-10'>自定义分享描述</div>
                        <Input />
                    </div>
                </Col>
            </Row>
            <div className='m-t-20 m-b-30'>
                <div className='step-form-label_small m-b-5'>自定义分享缩略图</div>
                <div className='flex flex-wrap m-t-10'>
                    <div className='step4-shareBanner m-r-15'>
                    </div>
                    <div className='step4-shareBanner-upload flex-center'>
                        <div className='text_dec flex-column-all-center'>
                            <span className='iconjia iconfont'></span>
                            <div>50 x 50</div>       
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
/**
 * @type React Component
 * @description 防刷票
 */
function BrushTicket() {
    return <div className='voteEdit-settingBlock m-t-30'>
    <div className='setting-header flex-row-center'>
        <div className='text_title'>防刷票</div>
    </div>
    <div className='setting-content'>
        <div>
        <Form 
            labelCol= {{ span: 6 }}
            wrapperCol= {{ span: 12 }}>
                <Form.Item
                    className='m-r-20'
                    label="投票验证码"
                    name="投票验证码"
                    >
                    <Switch></Switch>
                </Form.Item>
                <Form.Item
                    className='m-r-20'
                    label="智能防刷"
                    name="智能防刷"
                    >
                    <Switch></Switch>
                </Form.Item><Form.Item
                    className='m-r-20'
                    label="可投票地区"
                    name="可投票地区"
                    tooltip='?'
                    >
                    <Select style={{width: 150}} />
                </Form.Item>
                <Form.Item
                    className='m-r-20'
                    label="微信黑名单防刷"
                    name="微信黑名单防刷"
                    tooltip='?'
                    >
                    <Radio.Group value='1'>
                        <Radio value='1'>关闭</Radio>
                        <Radio value='2'>低</Radio>
                        <Radio value='3'>中</Radio>
                        <Radio value='3'>高</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    className='m-r-20'
                    label="限制每天刷票时间段"
                    name="限制每天刷票时间段"
                    tooltip='?'
                    >
                    <div className='m-b-20' style={{marginTop: 7}}>  <Radio  value='1'>关闭</Radio></div>
                    <div className='m-b-10'><Radio value='2'>开启</Radio></div><RangePicker />
                </Form.Item>
                <Form.Item
                    className='m-r-20'
                    label="禁封投票IP"
                    name="禁封投票IP"
                    tooltip='?'
                    >
                    <TextArea rows={4} />
                </Form.Item>
        </Form>
        </div>
    </div>
   </div>
}
/**
 * @type React Component
 * @description 订阅投票
 */
function SubscribeVote() {
    return <div className='voteEdit-settingBlock m-t-30'>
    <div className='setting-header flex-row-center'>
        <div className='text_title'>关注投票</div>
    </div>
    <div className='setting-content'>
        <Alert message={<div className='text'>尚未授权公众号，<a style={{color: '#467FCF'}}>点击这里去授权>></a></div>} type="warning" showIcon />
        <div className='step-form-label_small m-t-20'>
            强制关注
        </div>
        <Row>
            <Col {...colLayout_1}>
                <div className='flex m-t-10'>
                    <Radio defaultChecked value='1'>关闭</Radio>
                </div>
            </Col>
            <Col {...colLayout_1}>
                <div className='flex m-t-10'>
                    <Radio value='1'>方式1:微信接口验证(支持认证后的服务号)</Radio>
                </div>
            </Col>
            <Col {...colLayout_1}>
                <div className='flex m-t-10'>
                    <Radio value='1'>方式2:关键词验证(都支持)</Radio>
                </div>
            </Col>
            <Col  {...colLayout_1}>
                <div className='flex m-t-10'>
                    <Radio value='1'>方式3:用户授权提示自定义(仅支持服务号)</Radio>
                </div>
            </Col>
        </Row>
    </div>
   </div>
}

/**
 * @type React Component
 * @description 大屏设置
 */
function LargeScreenSetting() {
    return <div className='voteEdit-settingBlock m-t-30'>
        <div className='setting-header flex-between'>
            <div className='text_title'>大屏现场直播</div>
            <div className='setting-header-right flex-center ripple-black'>直播展示</div>
        </div>
        <div className='setting-content'>
            <div className='step-form-label_small'>
                开启大屏
            </div>
            <Radio.Group value='1' className='m-t-10'>
                <Radio value='1'>开启</Radio>
                <Radio value='2'>关闭</Radio>
            </Radio.Group>
            {/* <Alert message={<div className='text'>审核评论，<a style={{color: '#467FCF'}}>点击这里 >></a></div>} type="warning" /> */}
        </div>
    </div>
}

/**
 * @type React Component
 * @description 评论设置
 */
function CommentSetting() {
    return <div className='voteEdit-settingBlock m-t-30'>
        <div className='setting-header flex-between'>
            <div className='text_title'>评论功能</div>
        </div>
        <div className='setting-content'>
            <div className='step-form-label_small'>
                开启评论
            </div>
            <Radio.Group value='1' className='m-t-10'>
                <Radio defaultChecked value='1'>开启</Radio>
                <Radio value='2'>关闭</Radio>
            </Radio.Group>
            <Alert className='m-t-30 m-b-40' message={<div className='text'>审核评论，<a style={{color: '#467FCF'}}>点击这里 >></a></div>} type="warning" />
        </div>
    </div>
}

/**
 * @type React Component
 * @description 数据管理
 */
function DataSetting() {
    return <div className='voteEdit-settingBlock m-t-30'>
        <div className='setting-header flex-between'>
            <div className='text_title'>数据管理</div>
        </div>
        <div className='setting-content'>
            <Form
                labelCol= {{ span: 24 }}
                wrapperCol= {{ span: 24 }}
            >
            <Row >
                <Col {...colLayout_4}>
                    <div className='m-r-10'>
                        <Form.Item
                            label="虚拟选手数"
                            name="虚拟选手数"
                            tooltip
                        >
                        <InputNumber style={{width: 150}}/>
                        </Form.Item>
                    </div>
                </Col>
                <Col {...colLayout_4}>
                    <div className='m-r-10'>
                        <Form.Item
                            label="虚拟总票数"
                            name="虚拟总票数"
                            tooltip
                        >
                        <InputNumber style={{width: 150}}/>
                        </Form.Item>
                    </div>
                </Col>
                <Col {...colLayout_4}>
                    <div>
                        <Form.Item
                            label="虚拟访问数"
                            name="虚拟访问数"
                            tooltip
                        >
                        <InputNumber style={{width: 150}}/>
                        </Form.Item>
                    </div>
                </Col>
            </Row>
            </Form>
        </div>
    </div>
}

/**
 * @type React Component
 * @description 在线报名
 */
function ApplySetting() {
    return <div className='voteEdit-settingBlock m-t-30'>
        <div className='setting-header flex-between'>
            <div className='text_title'>在线报名</div>
        </div>
        <div className='setting-content'>
           
        </div>
    </div>
}

/**
 * @type React Component
 * @description  活动编辑，高级设置
 */
function Step4() {
    return <div className='voteEdit-step4'>
        {/* 规则设置 */}
       <VoteRuleSetting/>
       {/* 分享设置 */}
       <ShareSetting />
       {/* 防刷票 */}
       <BrushTicket/>
       {/* 订阅投票 */}
       <SubscribeVote />
       {/* 大屏设置 */}
       <LargeScreenSetting/>
       {/* 评论设置 */}
       <CommentSetting/>
       {/* 数据管理 */}
       <DataSetting/>
       {/* 在线报名 */}
       <ApplySetting/>
    </div>
}

export default Step4