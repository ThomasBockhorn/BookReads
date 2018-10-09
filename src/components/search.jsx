import React, { Component } from 'react';
import '../search.css'
import queryString from 'query-string'

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
        fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    books: result.items
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div id="searchfield">

            </div>
        );
    }
}

export default search;