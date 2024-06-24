import styles from '../styles/Button.module.css';
import { useState } from "react";

export default function Counter(props) {

  const [count,setCount]  = useState(0)

  const incrementClickHandler = () =>{
    setCount(count + 1)
  }

  if(count > 10){
    return(
        <h3>No more spots</h3>
    );
  }


    return(
        <div>
            <h3>Signed people:</h3>
            <p>Signed: {count}</p>
            <button className={styles.button} onClick={incrementClickHandler}>Sign up</button>
        </div>
    );
}