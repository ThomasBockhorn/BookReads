import React, { Component } from 'react';

class wanttoread extends Component {
    constructor() {
        super();
        this.location = this.location.bind(this);
    }

    //Checks to see if the addBooks method applies to this container
    bookCheck() {
        return this.props.book.map((book) => {
            if (book.location.toString() === "toread") {
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
            <div className="wanttoread">
                <h2 className="heading">Want to Read</h2>
                <hr className="style-two" />
                <div id="toread" className="wanttoreadcontainer" onClick={(e) => this.props.location(e)}>
                    {this.bookCheck()}
                </div>
            </div>
        );
    }
}
export default wanttoread