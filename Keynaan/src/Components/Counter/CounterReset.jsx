import React, { useState } from "react";
import Button from "./Button"
import './Counter.css'

function CounterReset() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
  

    setCount(count - 1);

    
  };

  let resetCount = () => {
    setCount(0);
  }
  return (
    <div className="content">
        <p>Counter App</p>
        <h1>{count}</h1>

           <Button  title={"+"} action={incrementCount} />
           <Button title={"-"} action={decrementCount} />
           <Button title={"Reset"} action={resetCount} />

      </div>
  );
}

export default CounterReset