# The Open Library API Search App

# Summary

The app uses two main components: App.js and Search.js. Hooks are used to set and manage state for the data fetched from the api, for error catching and the loading state to give the user notice that the api is loading its content.

For the main endpoint the App uses the 'title' to search by book title, although you can search by author too. A search value var is placed within the endpoint to catch the text entered by the user into the search input

To include fetching the covers for the books you have to include: ${item.isbn[0]} within the covers endpoint(line 55) which
uses the first isbn element from the array - use Console.log - line 28 to see the structure of data.

If no results are found from the users input, then a 'No Results Found' text is displayed. For some cases the book is found but is marked byt the api as not in Library - a notice has been added to code to notify the user of this

The Search component is passed the search function as a prop. THe search components form button element is disabled until the users enters text to avoid submitting an empty value. The input is reset to empty after submitting.

The App is styled with the App.css file and is fully responsive across all devices

# Improvements

1. Due to the Limitations of the api some covers for books do not exist, this results in an empty space being returned. In these cases a notice/message would be beneficial to the user such as 'no cover found'

2. Some Titles/authors for books are far too long, would suggest a way to shorten these to maintain layout

3. This is just an initial setup for the purposes of the challenge, In a real world App features and styling would be more complete
