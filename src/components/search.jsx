import React, { Component } from 'react';
import '../search.css';
import queryString from 'query-string';
import * as BooksAPI from '../BooksAPI';


class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            books: []
        }
    }

    //This will conduct a ajax request to google books api for a search when 
    //the page mounts
    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        const searchTerm = parsed.search;
        BooksAPI.search(searchTerm)
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    books: result
                });
            })
            .catch((error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                })
            })
    }

    //This will delete the selected book
    deleteSelected = (e) => {
        //This sent the info to addBooks
        this.props.addBook(e);

        //This will delete the current search list
        const newSearch = this.state.books.filter((term) => term.id != e.target.id)
        this.setState({ books: newSearch });
    }

    render() {
        return (
            <div id="searchfield">
                {this.state.books.map(item => (
                    <div key={item.id} onClick={(e) => { this.deleteSelected(e) }}>
                        <img id={item.id} src={item.imageLinks.smallThumbnail} height="100" width="80" alt={item.authors} />
                    </div>
                ))}
            </div>
        );
    }
}

export default search;