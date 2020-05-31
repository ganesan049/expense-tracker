import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function IncomeExpenses() {
  const { transaction } = useContext(GlobalContext);
  let income = 0;
  let expense = 0;
  transaction.map((val) =>
    val.amount > 0 ? (income += val.amount) : (expense += val.amount)
  );
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+{income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-{Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
