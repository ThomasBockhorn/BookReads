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
                    author: "Thomas Bockhorn",
                    title: "Test Object",
                    location: "read",
                    img: "https://unsplash.com/photos/Nw2lB5puyiw",
                    selected: false
                }
            ]
        };
    }

    //This will add a book to a particular container
    addBooks = () => {
        return this.state.book.map((item) => {
            return (
                <Book onAdd={this.addBooks} {...this.state} />
            )
        });
    }


    render() {
        return (
            <div id="containerinfo">
                <Navbar />
                <Readsdisplay onAdd={this.addBooks} {...this.state} />
                <Wanttoread onAdd={this.addBooks} {...this.state} />
                <Currentlyreading onAdd={this.addBooks} {...this.state} />
                <Footer />
            </div>
        );
    }
}

export default container;