import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function Balance() {
  const { transaction } = useContext(GlobalContext);
  let balance = 0;
  transaction.map((val) => (balance += val.amount));
  const sign = balance < 0 ? "-" : "+";
  // console.log(balance);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">
        {sign}{Math.abs(balance).toFixed(2)}
      </h1>
    </div>
  );
}

export default Balance;
