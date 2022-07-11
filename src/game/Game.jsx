import { useState } from "react";
import Button from "./Button";
import "./game.css";

export default function App() {
  const [total, setTotal] = useState(0);
  const [noOfClick, setNoOfClick] = useState(0);

  const incr = (no) => {
    setTotal(total + no);
    setNoOfClick(noOfClick + 1);
  };

  return (
    <div className="game">
     <h1>
       Welcome..!!!
     </h1>
     <h2>
       How to play this game :
       </h2>
      <h3>
         you can click any of the 3 buttons out of 9 and if total goes
        greater than 10 you will win or you lose
      </h3>
      <h1>{total}</h1>
      {noOfClick <= 2 && (
        <>
          <div className="gamebuttons">
            <Button incr={incr} count={2} />
            <Button incr={incr} count={5} />
            <Button incr={incr} count={1} />
            <Button incr={incr} count={3} />
            <Button incr={incr} count={2} />
            <Button incr={incr} count={4} />
            <Button incr={incr} count={1} />
            <Button incr={incr} count={3} />
            <Button incr={incr} count={5} />
          </div>
        </>
      )}

      {noOfClick > 2 ? total > 10 ? <p>you won</p> : <p>you lose</p> : <></>}
    </div>
  );
}
