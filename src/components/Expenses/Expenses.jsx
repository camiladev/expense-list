import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../IU/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

function Expense(props) {
  const [filteredYear, setFilterYear] = useState("2021");

  const expensesFilterHandler = (event) => {
    setFilterYear(event);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onExpensesFilter={expensesFilterHandler}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expense;
