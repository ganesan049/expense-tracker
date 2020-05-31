import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function AddTransaction() {
  const [text, settext] = useState("");
  const [amount, setamount] = useState("");
  const { addTransaction, transaction } = useContext(GlobalContext);
  const id = [transaction.map((value) => value.id)];
  console.log(id);
  const genrateID = () => {
    let currId = Math.floor(Math.random() * 1000000 + 1);
    return !id.includes(currId) ? currId : genrateID();
  };
  const onsubmit = (e) => {
    // console.log(typeof(amount))
    e.preventDefault();
    const newTransaction = {
      id: genrateID(),
      text: text[0].toUpperCase() + text.substr(1).toLowerCase(),
      amount: parseFloat(parseFloat(amount).toFixed(2)),
    };
    setamount("");
    settext("");
    console.log(newTransaction);
    addTransaction(newTransaction);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            autoFocus
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
            placeholder="Enter  text..."
            id=""
          />
        </div>
        <div className="form-control">
          <label htmlFor="amout">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            step="0.01"
            onChange={(e) => setamount(e.target.value)}
            placeholder="Enter amount..."
            id=""
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
