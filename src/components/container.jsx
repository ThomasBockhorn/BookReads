import React, { Component } from 'react';
import Readsdisplay from './readsdisplay';
import Navbar from './navbar';
import Wanttoread from './wanttoread';
import Currentlyreading from './currentlyreading';
import Footer from './footer';

//This container class will hold the three shelves
class container extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        book: [
            {
                author: "Thomas Bockhorn",
                title: "Test Object",
                location: "Wanttoreadcontainer",
                img: "https://unsplash.com/photos/Nw2lB5puyiw",
                selected: false
            }
        ]
    };

    //This will add a book to a particular container
    addBooks = () => {
        return this.state.book.map((item) => {
            if (item.location.toString() === "Wanttoreadcontainer") {
                return (
                    <React.Fragment>
                        <img src={item.img} height="50" width="50" />
                    </React.Fragment>
                )
            }
        });
    }

    //method to add a book to one of the three containers



    render() {
        return (
            <div id="containerinfo">
                <Navbar />
                <Readsdisplay onAdd={this.addBooks} />
                <Wanttoread onAdd={this.addBooks} />
                <Currentlyreading onAdd={this.addBooks} />
                <Footer />
            </div>
        );
    }
}

export default container;