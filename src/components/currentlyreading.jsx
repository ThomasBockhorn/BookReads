import React, { Component } from 'react';

class currentlyreading extends Component {
    constructor() {
        super();
        this.location = this.location.bind(this);
    }

    //Checks to see if the addBooks method applies to this container
    bookCheck() {
        return this.props.book.map((book) => {
            if (book.location.toString() === "currentlyread") {
                return this.props.onAdd();
            }
        });
    };

    //This will change the location of the book
    location = (e) => {
        //Checks to see if the book was selected, if it was then we change the location
        this.props.book.map((book) => {
            if (book.selected === true) {
                e.preventDefault();
                this.setState({
                    location: e.target.id
                });
            };
        });
    }

    render() {
        return (
            <div className="currentlyreading">
                <h2 className="heading">Currently Reading</h2>
                <hr className="style-two" />
                <div id="currentlyread" className="currentlyreadingcontainer" onClick={this.props.location}>
                    {this.bookCheck()}
                </div>
            </div>
        );
    }
}

export default currentlyreading;