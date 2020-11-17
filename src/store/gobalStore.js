import React, { useState } from "react"
import { createContainer } from "unstated-next"

function useGobalStore() {
  let [token, setToken] = useState() 
  let [user, setUser] = useState()
  return { user, setUser,token, setToken }
}

let GobalStore = createContainer(useGobalStore)
export default GobalStore