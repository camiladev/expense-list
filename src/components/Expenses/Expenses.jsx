import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../IU/Card";

function Expense(props) {
  const expenses = props.expenses;

  return (
    <Card className="expenses">
      {expenses.map((item) => {
          return(
              <ExpenseItem key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />

          )
      })}
    </Card>
  );
}

export default Expense;
