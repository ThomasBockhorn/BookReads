import React, { Component } from 'react';

class currentlyreading extends Component {

    render() {
        return (
            <div className="currentlyreading">
                <h2 className="heading">Currently Reading</h2>
                <hr className="style-two" />
                <div id="currentlyread" className="currentlyreadingcontainer" onClick={this.props.location}>
                </div>
            </div>
        );
    }
}

export default currentlyreading;