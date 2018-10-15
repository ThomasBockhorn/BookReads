import React, { Component } from 'react';
class wanttoread extends Component {
    //This checks to see the item location that displays book when fits category
    bookList = () => {
        return this.props.bookList.map(item => {
            if (item.location === "toread") {
                return (
                    <div key={item.id} onClick={this.props.bookSelected} id="book">
                        <img id={item.id} src={item.img} height="100" width="80" location={item.location} alt={item.id} />
                    </div>
                )
            }
        });
    }

    render() {
        return (
            <div className="wanttoread">
                <h2 className="heading">Want to Read</h2>
                <hr className="style-two" />
                <div id="toread" className="wanttoreadcontainer" onClick={this.props.destination}>
                    {this.bookList()}
                </div>
            </div >
        );
    }
}
export default wanttoread