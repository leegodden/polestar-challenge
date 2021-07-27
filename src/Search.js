import React, { useState } from 'react';
import './App.css';

const Search = (props) => {
	const [searchValue, setSearchValue] = useState('');

	const handleSearchInputChanges = (e) => {
		setSearchValue(e.target.value);
	};

	const resetInputField = () => {
		setSearchValue('');
	};

	const callSearchFunction = (e) => {
		e.preventDefault();
		props.search(searchValue);
		resetInputField();
	};

	return (
		<form className="search">
			<input
				value={searchValue}
				onChange={handleSearchInputChanges}
				type="text"
				placeholder="Search by book title or author"
			/>
			<button
				disabled={!searchValue}
				onClick={callSearchFunction}
				type="submit"
			>
				OK
			</button>
		</form>
	);
};

export default Search;
