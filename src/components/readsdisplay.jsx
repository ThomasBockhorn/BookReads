import React, { Component } from 'react';

class readsdisplay extends Component {
    constructor() {
        super();
        this.location = this.location.bind(this);
    }

    //Checks to see if the addBooks method applies to this container
    bookCheck() {
        return this.props.book.map((book) => {
            if (book.location.toString() === "read") {
                return this.props.onAdd();
            }
        });
    };

    //This will change the location of the book
    location = (e) => {
        console.log(e.target.id);
    }

    render() {
        return (
            <div className="readsection">
                <h2 className="heading">Already Read</h2>
                <hr className="style-two" />
                <div id="read" className="readsectioncontainer" onClick={this.props.location}>
                    {this.bookCheck()}
                </div>
            </div>
        );
    }
}

export default readsdisplay;