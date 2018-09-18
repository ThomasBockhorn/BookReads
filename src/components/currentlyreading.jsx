import React, { Component } from 'react';

class currentlyreading extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className="currentlyreading">
                <h2 className="heading">Currently Reading</h2>
                <hr className="style-two" />
                <div id="currentlyread" className="currentlyreadingcontainer" >
                    {this.props.onAdd()}
                </div>
            </div>
        );
    }
}

export default currentlyreading;