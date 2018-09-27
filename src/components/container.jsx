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
                location: "read",
                img: "https://unsplash.com/photos/Nw2lB5puyiw",
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

    //readsDisplay function to displays books in the readsDisplay container
    readsDisplay = () => {
        this.state.book.map(item => {
            <div>
                <img src={item.img} />
            </div>
        })
    }


    render() {
        return (
            <div id="containerinfo">
                <Navbar />
                <Readsdisplay location={this.location} readsDisplay={this.readsDisplay} />
                <Wanttoread location={this.location} />
                <Currentlyreading location={this.location} />
                <Footer />
            </div>
        );
    }
}

export default container;