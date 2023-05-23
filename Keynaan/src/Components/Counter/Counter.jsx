import React, { useState } from 'react'
import "./Counter.css"

function Counter() {
    const [count, setCount] = useState(0);
  
    let addCounter = () => {
      setCount(count + 1);
    };
  
    let subCounter = () => {
    if(count >0)
    {
        setCount(count -1)
    }
    };
  
    let ResetCounter = () => {
      setCount(0);
    }
  
    return (
      <div className="content">
        <p>Couter App</p>
          <h1>{count}</h1>
            <button onClick={addCounter} className='btnAdd'>+</button>
           <button onClick={subCounter} className='btnSub'>-</button>
           <button onclick={ResetCounter}className="btnReset">Reset</button>
        </div>
        
    );
  }
export default Counter
