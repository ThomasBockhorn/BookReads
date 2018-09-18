import React, { Component } from 'react';

class wanttoread extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wanttoread">
                <h2 className="heading">Want to Read</h2>
                <hr className="style-two" />
                <div id="toread" className="wanttoreadcontainer">
                    {this.props.onAdd()}
                </div>
            </div>
        );
    }
}
export default wanttoread