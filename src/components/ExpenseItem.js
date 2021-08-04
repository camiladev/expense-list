import "./ExpenseItem.css"

function ExpenseItem(props){
    return(
        <div classeName="expense-item">
            <div>{props.date.toISOString()}</div>
            <div classeName="expense-item__description">
                <h2>{props.title}</h2>
                <div classeName="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem