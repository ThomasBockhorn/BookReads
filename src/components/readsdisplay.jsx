import React, { Component } from 'react';

class readsdisplay extends Component {

    render() {
        return (
            <div className="readsection">
                <h2 className="heading">Already Read</h2>
                <hr className="style-two" />
                <div id="read" className="readsectioncontainer" onClick={this.props.location}>
                    {this.props.onClick}
                </div>
            </div>
        );
    }
}

export default readsdisplay;