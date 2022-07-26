import React, { useState } from 'react';

import ExpensesItem from './ExpensesItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const[filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses= props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
  

  return (
    <Card className="expenses">
    <ExpensesFilter  selected={filteredYear} onChangeFilter={filterChangeHandler}/>

    {filteredExpenses.map((expenses)=>
         <ExpensesItem
         key ={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
        // deleteHandler={props.deleteHandler}
/>
    ) }
      
      {/* <ExpensesItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        deleteHandler={props.deleteHandler}
      />
      <ExpensesItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        deleteHandler={props.deleteHandler}
      />
      <ExpensesItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        deleteHandler={props.deleteHandler}
      /> */}
    </Card>
  );
}

export default Expenses;