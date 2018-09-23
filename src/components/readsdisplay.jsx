import React, { Component } from 'react';

class readsdisplay extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="readsection">
                <h2 className="heading">Already Read</h2>
                <hr className="style-two" />
                <div id="read" className="readsectioncontainer" onClick={this.props.location}>
                </div>
            </div>
        );
    }
}

export default readsdisplay;