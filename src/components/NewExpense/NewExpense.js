import { useState } from "react";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const getRandomId = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const saveNewExpense = (newExpense) => {
    const newExpenseData = {
      ...newExpense,
      id: getRandomId(1, 100),
    };
    props.onAddExpenseData(newExpenseData);
    setIsVisibleForm(false);
  };

  const formVisibleHandle = () => {
    setIsVisibleForm(!isVisibleForm);
  };

  return (
    <div className="new-expense">
      {isVisibleForm ? (
        <ExpenseForm
          onSaveNewExpense={saveNewExpense}
          onFormVisible={formVisibleHandle}
        />
      ) : (
        <AddExpenseForm onFormVisible={formVisibleHandle} />
      )}
    </div>
  );
}

export default NewExpense;
