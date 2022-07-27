import React, { useState } from 'react';

import ExpensesItem from './ExpensesItem';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
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
     <ExpensesChart expenses={filteredExpenses} />
     <ExpensesList items={filteredExpenses} />
     {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
     {filteredExpenses.length > 0 &&
     filteredExpenses.map((expense)=>(
      <ExpensesItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.data}
        />
     )) */}
     {/* }; */}
      </Card>
  );
};

export default Expenses;