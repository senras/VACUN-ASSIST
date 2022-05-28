import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	// const [title, setTitle] = useState(props.title);
	const title = props.title;
	// const clickHandler = () => {
	// 	setTitle("Updated!!");
	// };

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{title}</h2>
					<div className="expense-item__price">${props.amount}</div>
				</div>

				{/* <button onClick={clickHandler}> ChangeTitle </button> */}
			</Card>
		</li>
	);
};

export default ExpenseItem;
