import React from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";

function NewExpenses(props) {
    const saveExpenseDateHandler = (enteredExpenseDate)=>{
        const expenseDate = {
            ...enteredExpenseDate,
            id:Math.random().toString()
        }
       props.onAddExpense(expenseDate);
    }
    
  return (
    <div className="new-expense">
      <ExpensesForm  onSaveExpenseDate={saveExpenseDateHandler}/>
    </div>
  );
}
export default NewExpenses;