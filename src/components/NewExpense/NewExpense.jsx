import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

  const getRandomId = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const saveNewExpense = (newExpense) => {
    const newExpenseData = {
      ...newExpense,
      id: getRandomId(1,100),
    };
    props.onAddExpenseData(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={saveNewExpense} />
    </div>
  );
}

export default NewExpense;
