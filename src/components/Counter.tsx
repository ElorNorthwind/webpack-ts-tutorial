import { useState } from "react";
import classes from "./Counter.module.scss";

export function Counter() {
  const [count, setCount] = useState(0);
  const increment = (num: number) => {
    setCount(count + num);
  };

  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button onClick={() => increment(1)}>+</button>
      <button onClick={() => increment(-1)}>-</button>
    </div>
  );
}
