import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  const { transaction, getTransaction, loading } = useContext(GlobalContext);
  useEffect(() => {
    getTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  console.log(transaction);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((trans) => (
          <Transaction key={trans._id} trans={trans}  />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
