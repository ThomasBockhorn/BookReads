import React, { Component } from 'react';
import Readsdisplay from './readsdisplay';
import Wanttoread from './wanttoread';
import Currentlyreading from './currentlyreading';

//This container class will hold the three shelves
class container extends Component {
    //The book object array
    state = {
        book: [
            {
                id: 1,
                author: "Thomas Bockhorn",
                title: "Test Object",
                location: "toread",
                img: "https://images.freeimages.com/images/large-previews/322/indian-heads-1391201.jpg",
                selected: true
            }
        ]
    };

    //This will find the location
    location = (e) => {
        this.state.book.map((item) => {
            if ((item.selected === true) && (e.target.id !== "image")) {
                item.location = e.target.id;
                item.selected = false;
                this.setState(item);
            }
        });
    };


    render() {
        return (
            <div id="containerinfo">
                <Readsdisplay location={this.location} bookList={this.state.book} />
                <Wanttoread location={this.location} bookList={this.state.book} />
                <Currentlyreading location={this.location} bookList={this.state.book} />
            </div>
        );
    }
}

export default container;