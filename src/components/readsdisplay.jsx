import React, { Component } from 'react';
import Book from './book';

class readsdisplay extends Component {


    render() {
        return (
            <div className="readsection">
                <h2 className="heading">Already Read</h2>
                <hr className="style-two" />
                <div id="read" className="readsectioncontainer" onClick={this.props.location} onClick={this.props.readsDisplay}>

                </div>
            </div>
        );
    }
}

export default readsdisplay;