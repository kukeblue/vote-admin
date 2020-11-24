import React from 'react'
import './index.less'

function Index(props) {
  return (
    <div>
      <div style={{width: '1rem', height: '1rem', fontSize: '0.2rem'}}>123</div>
        <p>盒子的多个属性一起动画: width, height, background-color, transform. 将光标悬停在盒子上查看动画。</p>
        <div className="box"></div>
    </div>
  );
}

export default Index;
