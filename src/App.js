// An app using the Open Library's API to search, fetch and return books
// Author: Lee Godden
// Version: 1.0
// First Created: 26: 07: 2021

import React, { useState } from 'react';
import './App.css';
import Search from './Search';

function App() {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const search = (searchValue) => {
		setLoading(true);
		// using: {searchValue} to catch user input
		fetch(`http://openlibrary.org/search.json?title=${searchValue}&limit=10`)
			.then((response) => response.json())
			.then((data) => setData(data))
			.then(() => setLoading(false))
			.catch(setError);
	};

	// show loading text when fetching results
	if (loading) {
		return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;
	}

	// catch error
	if (error) {
		return <pre>{JSON.stringify(error, null, 2)}</pre>;
	}

	let array = data.docs;
	console.log(data.docs);

	return (
		<div className="App">
			<div className="App-header">Search the Open Library</div>
			<Search search={search} />
			<div className="section-center">
				{array && array.length > 0
					? array.map((item, index) => {
							return (
								<div className="menu-item" key={index}>
									<div className="book-item">
										<div className="item-info">
											<header>
												<h4>{item.title}</h4>
											</header>
											<p className="info">
												by {item.author_name} <br />
												First published: {item.first_publish_year}
											</p>
										</div>
										{!item.isbn ? (
											<p style={{ color: 'red' }}>Book not in Library</p>
										) : (
											<img
												className="cover"
												alt={item.title}
												// endpoint for book covers
												src={`http://covers.openlibrary.org/b/isbn/${item.isbn[0]}-M.jpg?default=true`}
											/>
										)}
									</div>
								</div>
							);
					  })
					: // Display message if no results found
					  array !== undefined && <p className="error">No Results Found </p>}
			</div>
		</div>
	);
}
export default App;
