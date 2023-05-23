import React, { useState } from 'react'
import On from "./images/On.png"
import Off from './images/Off.png'
function OnOff() {
  const [toggle , setToggle] = useState(false)
  const toggle_button = () =>{
    setToggle(!toggle)
  }
  return (
    <div align="center" >
      <img src={toggle?On:Off} alt="on" />
      <button  onClick={toggle_button} >{toggle?'On':'Off'}</button>
    </div>
  )
}

export default OnOff