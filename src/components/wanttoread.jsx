import React, { Component } from 'react';
import Book from './book';
class wanttoread extends Component {

    //This will allow the user to select a book to be moved
    selectImage = (e) => {
        if (e.target.id === "image") {
            this.props.bookList.map((item) => {
                item.selected = true;
                this.setState(item);
            });
        }
    }

    //This checks to see the item location that displays book when fits category
    bookList = () => {
        return this.props.bookList.map(item => {
            if (item.location === "toread") {
                return <Book key={item.id} bookImage={item.img} selectImage={this.selectImage} alt={item.id} />
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