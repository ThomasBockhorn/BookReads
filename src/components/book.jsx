import React, { Component } from 'react';


class book extends Component {

    render() {
        return <img id="image" alt={this.props.alt} src={this.props.bookImage} height="100" width="80" onClick={this.props.selectImage} />
    }
}

export default book;
