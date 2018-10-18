import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './search';
import Navbar from './navbar';
import Footer from './footer';
import Container from './container';
import * as BooksAPI from '../BooksAPI';


class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookset: []
        }
    }

    //This will add the book to the main state
    addBook = (routeProps) => {
        let booklist = this.state.bookset;

        //this creates a temporary book
        let book = {
            id: "",
            img: "",
            location: "toread",
            selected: false
        }
        //This assigns a new values to book
        if (routeProps !== "") {
            book.id = routeProps.target.id;
            book.img = routeProps.target.src;
        }
        //Pushes temp books to the array of objects
        booklist.push(book);
        this.setState(booklist);

        //This changes the entry to the server
        BooksAPI.get((book.id)).then(item => BooksAPI.update(item, book.location))
    }

    //This will change the location of the book
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Route exact path="/" render={(routerProps) => <Container bookList={this.state.bookset} {...routerProps} />} />
                    <Route path="/search" render={(routerProps) => <Search {...routerProps} addBook={(book) => this.addBook(book)} />} />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default main;