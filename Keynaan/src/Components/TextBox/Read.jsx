import React, { useState } from 'react'
import './Read.css'
function TextBox() {
    const [name , setName] = useState("")
    const [list , setList] = useState([])
    const readHndler = (e) =>{
        e.preventDefault()
        console.log(name)
        const date = [name]
        if(name)
        {
            setList((ls)=>[...ls,date])
            setName("")
        }
    }
  return (
    <div className='box'>
        <form >
        <input className='txt' type='text' placeholder='Enter text' name='name' value={name} onFocus={readHndler}
         onChange={  (e) => setName(e.target.value)} />
        <input className='btn' onClick={readHndler} value="Add"></input>
        </form>
        {
            list.map((a) => <div>
                <li>{a}</li>
                 </div>)
        }
    </div>
  )
}

export default TextBox