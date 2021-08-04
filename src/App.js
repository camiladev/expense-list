import ExpenseItem from "./components/ExpenseItem";

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
      {expenses.map(item => {
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      })}
      
    </div>
  );
}

export default App;
