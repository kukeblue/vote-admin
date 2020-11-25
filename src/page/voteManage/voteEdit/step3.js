import { Button, Col, Row } from 'antd'
import React from 'react'
import { colLayout_pageTemplate } from '../../../config/colLayout'

function VoteEditStep3() {
    return  <div className='voteEdit-step3'>
        {/* 界面模版 */}
        <div className='voteEdit-step3-pageTemplate'>
            <div className='pageTemplate-header flex-row-center'>
                <div className='text_title'>界面模板</div>
            </div>
            <div className='pageTemplate-content'>
                <Row>
                    {[1,2,3,4,5,6,7].map(key=>{
                        return  <Col key={key} className='flex-center' {...colLayout_pageTemplate}><div className='pageTemplate-item'></div></Col>
                    })}
                </Row>
                <div className='flex-center m-t-30'>
                    <Button type='primary'>点击加载更多...</Button>
                </div>
            </div>
        </div>
        {/* 轮播图 */}
        <div className='voteEdit-step3-pageSwiperPicture m-t-30'>
            <div className='pageSwiperPicture-header flex-row-center'>
                <div className='text_title'>轮播图</div>
                <div className='text_dec m-l-10'>轮播图 (最多允许6张, 图片和视频不能同时显示)</div>
            </div>
            <div className='pageSwiperPicture-content'>
                
            </div>
        </div>
    
    
    
    </div>
}

export default VoteEditStep3