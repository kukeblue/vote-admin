import React, { useEffect } from 'react'
import PreSelectInput from '../component/Form/PreSelectInput'
import './index.less'

function Index(props) {
  return (
    <div>
      <PreSelectInput></PreSelectInput>
      <div class="box1">
        <div class="inner-box1">
        <p>已投</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
