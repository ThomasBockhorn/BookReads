import React, { Component } from 'react';
class currentlyreading extends Component {
    //This checks to see the item location that displays book when fits category
    bookList = () => {
        return this.props.bookList.map(item => {
            if (item.location === "currentlyread") {
                console.log(item.selected);
                return (
                    <div onClick={this.props.bookSelected}>
                        <img id={item.id} src={item.img} height="100" width="80" location={item.location} />
                    </div>
                )
            }
        });
    }


    render() {
        return (
            <div className="currentlyreading">
                <h2 className="heading">Currently Reading</h2>
                <hr className="style-two" />
                <div id="currentlyread" className="currentlyreadingcontainer" onClick={this.props.destination}>
                    {this.bookList()}
                </div>
            </div>
        );
    }
}

export default currentlyreading;