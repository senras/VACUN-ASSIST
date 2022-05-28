import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
	const SelectYearHandler = (event) => {
		props.onChangeFilter(event.target.value);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select value={props.selected} onChange={SelectYearHandler}>
					<option value="2022">Vacuna 1</option>
					<option value="2021">Vacuna 2</option>
					<option value="2020">Vacuna 3</option>
					<option value="2019">Vacuna 4</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
