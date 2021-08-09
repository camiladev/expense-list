

const AddExpenseForm = (props) => {
 
  return (
    <button type="button" onClick={props.onFormVisible}>
      Add New Expense
    </button>
  );
};

export default AddExpenseForm;
