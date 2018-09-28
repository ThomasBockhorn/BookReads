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



    }
    //The book object array
    state = {
        book: [
            {
                id: 1,
                author: "Thomas Bockhorn",
                title: "Test Object",
                location: "toread",
                img: "https://pixabay.com/en/drop-splash-drip-water-liquid-wet-3698073/",
                selected: true
            }
        ]
    };


    //This will find the location
    location = (e) => {
        this.state.book.map((item) => {
            if (item.selected === true) {
                item.location = e.target.id
                this.setState(item);
            }
        });
    };


    render() {
        return (
            <div id="containerinfo">
                <Navbar />
                <Readsdisplay location={this.location} bookList={this.state.book} />
                <Wanttoread location={this.location} bookList={this.state.book} />
                <Currentlyreading location={this.location} bookList={this.state.book} />
                <Footer />
            </div>
        );
    }
}

export default container;