import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function Transaction({ trans }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = trans.amount < 0 ? "-" : "+";

  return (
    <div key={trans._id}>
      <li className={trans.amount < 0 ? "minus" : "plus"} key={trans._id}>
        {trans.text}
        <span>
          {sign}
          {Math.abs(trans.amount)}
          <button
            className="delete-btn"
            key={trans._id}
            onClick={() => deleteTransaction(trans._id)}
          >
            X
          </button>
        </span>
      </li>
    </div>
  );
}

export default Transaction;
