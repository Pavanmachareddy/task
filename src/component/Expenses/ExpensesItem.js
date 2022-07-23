import React, { useState } from 'react';

import ExpensesDate from './ExpensesDate';
import Card from '../UI/Card';
import './ExpensesItem.css';

const ExpensesItem = (props) => {
    const [amount,addamount]=useState(props.amount)

    const addExpense=()=>{
        addamount(amount+100);
        
    }
    // const clickHandler=(id)=>{
    //     props.deleteHandler(props.amount)
    // }

  return (
    <Card className='expense-item'>
      <ExpensesDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={addExpense}>Add Expenses</button>
        {/* <button onClick={clickHandler}>Delete Expenses</button> */}
      </div>
    </Card>
  );
}

export default ExpensesItem;