import React, { Component } from 'react';
import Book from './book';
class wanttoread extends Component {

    //This will change the status of the image
    selectImage = (e) => {
        console.log(e.target.id);
    }

    //This checks to see the item location that displays book when fits category
    bookList = () => {
        return this.props.bookList.map(item => {
            if (item.location === "toread") {
                return <Book key={item.id} bookImage={item.img} selectImage={this.props.selectImage} />
            }
        });
    }

    render() {
        return (
            <div className="wanttoread">
                <h2 className="heading">Want to Read</h2>
                <hr className="style-two" />
                <div id="toread" className="wanttoreadcontainer" onClick={this.props.location}>
                    {this.bookList()}
                </div>
            </div >
        );
    }
}
export default wanttoread