import React, { Component } from 'react';
import Book from './book';

class readsdisplay extends Component {

    //This will allow the user to select a book to be moved
    selectImage = (e) => {
        if (e.target.id === "image") {
            this.props.bookList.map((item) => {
                item.selected = true;
                this.setState(item);
            });
        }
    }

    //This checks to see the item location that displays book when fits category
    bookList = () => {
        return this.props.bookList.map(item => {
            if (item.location === "read") {
                return <Book key={item.id} bookImage={item.img} selectImage={this.selectImage} alt={item.id} />
            }
        });
    }


    render() {
        return (
            <div className="readsection">
                <h2 className="heading">Already Read</h2>
                <hr className="style-two" />
                <div id="read" className="readsectioncontainer" onClick={this.props.location}>
                    {this.bookList()}
                </div>
            </div>
        );
    }
}

export default readsdisplay;