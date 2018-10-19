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
                if (result.error != "empty query") {
                    this.setState({
                        isLoaded: true,
                        books: result
                    });
                }
            })
            .catch((result) => {
                this.setState({
                    isLoaded: false
                });
            })
    }

    //This will delete the selected book
    deleteSelected = (e) => {
        //This sent the info to addBooks
        this.props.addBook(e);

        //This will delete the current search list
        const newSearch = this.state.books.filter((term) => term.id !== e.target.id)
        this.setState({ books: newSearch });
    }

    //This will display the books
    searchDisplay = () => {
        if (this.state.books.length !== 0) {
            return (
                this.state.books.map(item => (
                    <div id="book" key={item.id} onClick={(e) => { this.deleteSelected(e) }}>
                        <img id={item.id} src={item.imageLinks.smallThumbnail} height="100" width="80" alt={item.authors} />
                    </div>
                ))
            );
        }
        else {
            return <div />
        }
    }



    render() {
        return (
            <div id="searchfield">
                {this.searchDisplay()}
            </div>
        );
    }
}

export default search;