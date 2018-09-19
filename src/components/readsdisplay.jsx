import React, { Component } from 'react';

class readsdisplay extends Component {
    //Checks to see if the addBooks method applies to this container
    bookCheck(props) {
        return this.props.book.map((book) => {
            if (book.location.toString() === "read") {
                return this.props.onAdd();
            }
        });
    };

    render() {
        return (
            <div className="readsection">
                <h2 className="heading">Already Read</h2>
                <hr className="style-two" />
                <div id="read" className="readsectioncontainer" {...this.state}>
                    {this.bookCheck()}
                </div>
            </div>
        );
    }
}

export default readsdisplay;