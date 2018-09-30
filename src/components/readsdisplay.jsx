import React, { Component } from 'react';
import Book from './book';

class readsdisplay extends Component {

    //This checks to see the item location that displays book when fits category
    bookList = () => {
        return this.props.bookList.map(item => {
            if (item.location === "read") {
                return <Book key={item.id} bookImage={item.img} />
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