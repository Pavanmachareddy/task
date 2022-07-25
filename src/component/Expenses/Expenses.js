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
  return (
    <Card className="expenses">
    <ExpensesFilter  selected={filteredYear} onChangeFilter={filterChangeHandler}/>

    {props.items.map(item=>
         <ExpensesItem
         key ={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        deleteHandler={props.deleteHandler}
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