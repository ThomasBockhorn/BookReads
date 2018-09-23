import React, { Component } from 'react';
import Readsdisplay from './readsdisplay';
import Navbar from './navbar';
import Wanttoread from './wanttoread';
import Currentlyreading from './currentlyreading';
import Footer from './footer';
import Book from './book';

//This container class will hold the three shelves
class container extends Component {
    constructor(props) {
        super(props);

        //The book object array
        this.state = {
            book: [
                {
                    id: 1,
                    author: "Thomas Bockhorn",
                    title: "Test Object",
                    location: "toread",
                    img: "https://unsplash.com/photos/Nw2lB5puyiw",
                    selected: true
                }
            ]
        };
    }

    //This will find the location
    location = (e) => {
        let item = this.state.book;
        item.map((book) => {
            if (book.selected === true) {
                this.setState({ location: e.target.id });
            }
        });
    };

    //This function will add the book to the particular React tag
    addBook = (e) => {
        let item = this.state.book;
        item.map((book) => {
            console.log(book.location);
            //figure out how to change the location of the book
        });
    }

    render() {
        return (
            <div id="containerinfo">
                <Navbar />
                <Readsdisplay  {...this.state} location={this.location} onChange={this.addBook()} />
                <Wanttoread  {...this.state} location={this.location} onChange={this.addBook()} />
                <Currentlyreading  {...this.state} location={this.location} onChange={this.addBook()} />
                <Footer />
            </div>
        );
    }
}

export default container;