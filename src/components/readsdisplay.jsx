import React, { Component } from 'react';

class readsdisplay extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className="readsection">
                <h2 className="heading">Already Read</h2>
                <hr className="style-two" />
                <div id="read" className="readsectioncontainer">
                    {this.props.onAdd()}
                </div>
            </div>
        );
    }
}

export default readsdisplay;