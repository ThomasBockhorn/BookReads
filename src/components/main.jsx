import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './search';
import Navbar from './navbar';
import Footer from './footer';
import Container from './container';


class main extends Component {
    state = {
        bookset: []
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
        if (routeProps != "") {
            book.id = routeProps.target.id;
            book.img = routeProps.target.src;
        }
        //Pushes temp books to the array of objects
        booklist.push(book);
        this.setState(booklist);
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Route path="/index" component={Container} />
                    <Route path="/search" render={(routeProps) => <Search {...routeProps} addBook={(e) => this.addBook(e)} />}
                    />} />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default main;