import React, { Component } from 'react';

class readsdisplay extends Component {

    //This checks to see the item location that displays book when fits category
    bookList = () => {
        return this.props.bookList.map(item => {
            if (item.location === "read") {
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
            <div className="readsection">
                <h2 className="heading">Already Read</h2>
                <hr className="style-two" />
                <div id="read" className="readsectioncontainer" onClick={this.props.destination}>
                    {this.bookList()}
                </div>
            </div>
        );
    }
}

export default readsdisplay;