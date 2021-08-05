import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const expenses = [
    { id: 1, title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14) },
    { id: 2, title: "Car", amount: 267.65, date: new Date(2021, 5, 12) },
    { id: 3, title: "Car", amount: 267.65, date: new Date(2021, 5, 12) },
    { id: 4, title: "Car", amount: 267.65, date: new Date(2021, 5, 12) }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense />
      <Expenses expenses={expenses} />      
    </div>
  );
}

export default App;


