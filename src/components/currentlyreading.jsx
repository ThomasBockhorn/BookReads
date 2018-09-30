import React, { Component } from 'react';
import Book from './book';
class currentlyreading extends Component {

    //This checks to see the item location that displays book when fits category
    bookList = () => {
        return this.props.bookList.map(item => {
            if (item.location === "currentlyread") {
                return <Book key={item.id} bookImage={item.img} />
            }
        });
    }


    render() {
        return (
            <div className="currentlyreading">
                <h2 className="heading">Currently Reading</h2>
                <hr className="style-two" />
                <div id="currentlyread" className="currentlyreadingcontainer" onClick={this.props.location}>
                    {this.bookList()}
                </div>
            </div>
        );
    }
}

export default currentlyreading;