import React, { useState } from 'react'
import { createContainer, useContainer } from 'unstated-next';
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
    return <div className='voteManage-step flex-between'>
            {
                steps.map(item=>{
                    return <div 
                        onClick={()=>setCurrectStep(item.index)}
                        key={item.name} 
                        className={currectStep == item.index ? 'voteManage-step-item_selected flex-row-center' : 'voteManage-step-item flex-row-center'}
                    >
                        <div className='step-index m-r-20'>{item.index}</div>
                        <div>
                            <div className='step-name'>{item.name}</div>
                            <div className='step-dec'>{item.dec}</div>
                        </div>
                    </div>
                }) 
            }
    </div>
}

/**
 * @type React Page
 * @description 投票管理页面
 */
function VoteManage() {
    return <div className='page voteManage-page'>
        <VoteManageStep></VoteManageStep>
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
  