import React, { Component } from 'react';

class currentlyreading extends Component {
    //Checks to see if the addBooks method applies to this container
    bookCheck() {
        return this.props.book.map((book) => {
            if (book.location.toString() === "currentlyread") {
                return this.props.onAdd();
            }
        });
    };

    render() {
        return (
            <div className="currentlyreading">
                <h2 className="heading">Currently Reading</h2>
                <hr className="style-two" />
                <div id="currentlyread" className="currentlyreadingcontainer" >
                    {this.bookCheck()}
                </div>
            </div>
        );
    }
}

export default currentlyreading;