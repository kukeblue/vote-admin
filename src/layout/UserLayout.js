import React from 'react'
import './userLayout.less'

function UserLayout(props) {
  return (
    <div className='userLayout'>
        {props.children}
    </div>
  );
}

export default UserLayout;
