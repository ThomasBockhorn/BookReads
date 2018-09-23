import React, { Component } from 'react';

class wanttoread extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="wanttoread">
                <h2 className="heading">Want to Read</h2>
                <hr className="style-two" />
                <div id="toread" className="wanttoreadcontainer" onClick={this.props.location}>
                </div>
            </div >
        );
    }
}
export default wanttoread