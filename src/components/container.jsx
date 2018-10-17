import React, { Component } from 'react';
import Readsdisplay from './readsdisplay';
import Wanttoread from './wanttoread';
import Currentlyreading from './currentlyreading';
import * as BooksAPI from '../BooksAPI';

//This container class will hold the three shelves
class container extends Component {

    //This method will changed the status of book selection from false to true
    bookSelected = (e) => {
        this.props.bookList.map((item) => {
            if (e.target.id === item.id) {
                item.selected = true;
                this.setState(item);
            }
        });
    };

    //This method will change the location of the book
    destination = (e) => {
        this.props.bookList.map((item) => {
            if ((e.target.id === "toread") || (e.target.id === "read") || (e.target.id === "currentlyread")) {
                if (item.selected === true) {
                    item.location = e.target.id;
                    item.selected = false;
                    this.setState(item);

                    //This will update the server
                    BooksAPI.get((item.id)).then(book => BooksAPI.update(book, item.location))
                }
            }
        });

    };

    render() {
        return (
            <div id="containerinfo">
                <Readsdisplay bookList={this.props.bookList} bookSelected={this.bookSelected} destination={this.destination} />
                <Wanttoread bookList={this.props.bookList} bookSelected={this.bookSelected} destination={this.destination} />
                <Currentlyreading bookList={this.props.bookList} bookSelected={this.bookSelected} destination={this.destination} />
            </div>
        );
    }
}

export default container;