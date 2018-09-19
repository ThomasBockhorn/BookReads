import React, { Component } from 'react';

class wanttoread extends Component {
    //Checks to see if the addBooks method applies to this container
    bookCheck() {
        return this.props.book.map((book) => {
            if (book.location.toString() === "toread") {
                return this.props.onAdd();
            }
        });
    };

    render() {
        return (
            <div className="wanttoread">
                <h2 className="heading">Want to Read</h2>
                <hr className="style-two" />
                <div id="toread" className="wanttoreadcontainer">
                    {this.bookCheck()}
                </div>
            </div>
        );
    }
}
export default wanttoread