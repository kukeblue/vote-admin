import React, { useEffect } from 'react'
import GobalStore from '../store/gobalStore'
import { useHistory } from "react-router-dom";

function BasalLayout(props) {
  let gobalStore = GobalStore.useContainer()
  let history = useHistory();

  useEffect(()=>{
      // if(!gobalStore.token) {
      //   history.push("/user/login");
      // }
  }, [])

  return (
    <div>
      <div>
        {/* <Button type="primary">Button</Button> */}
      </div>
      <div>{gobalStore.token}</div>
      <div>{props.children}</div>
    </div>
  );
}

export default BasalLayout;
