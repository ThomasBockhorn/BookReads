import React, { Component } from 'react';


class book extends Component {

    //This method will move the location of the book
    selectMove = (e) => {
        console.log(e.target.src)

    }

    render() {
        return <img src={this.props.bookImage} alt="Sample" height="100" width="80" onClick={this.selectMove} />
    }
}

export default book;
