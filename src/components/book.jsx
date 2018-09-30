import React, { Component } from 'react';


class book extends Component {

    render() {
        return <img id="image" src={this.props.bookImage} alt="Sample" height="100" width="80" onClick={this.props.selectImage} />
    }
}

export default book;
