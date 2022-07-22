import React from 'react';

import ExpensesDate from './ExpensesDate';
import Card from '../UI/Card';
import './ExpensesItem.css';

const ExpensesItem = (props) => {
    const clickHandler=(id)=>{
        props.deleteHandler(props.amount)
    }

  return (
    <Card className='expense-item'>
      <ExpensesDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Delete Expenses</button>
      </div>
    </Card>
  );
}

export default ExpensesItem;