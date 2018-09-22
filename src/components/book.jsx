import React, { Component } from 'react';

class book extends Component {
    state = {}

    //This grabs the image from the objects array referenced in container
    imageFinder() {
        return this.props.book.map(item => {
            return item.img;
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hi</h1>
            </React.Fragment>
        );
    }
}

export default book;