import { useState } from "react";

export default function Counter(props) {

  const [count,setCount]  = useState(0)

  const incrementClickHandler = () =>{
    setCount(count + 1)
  }


    return(
        <div>
            <h3>Signed people</h3>
            <p>Signed: {count}</p>
            <button onClick={incrementClickHandler}>Sign up</button>
        </div>
    );
}