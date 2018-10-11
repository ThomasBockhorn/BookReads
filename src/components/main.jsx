import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './search';
import Navbar from './navbar';
import Footer from './footer';
import Container from './container';


class main extends Component {
    state = {
        bookset: [
            {
                id: "",
                img: "",
                location: "toread",
                selected: false
            }
        ]
    }

    //This tests the doubleClick
    addBook = (routeProps) => {
        this.state.bookset.map((item) => {
            item.id = routeProps.target.id;
            item.img = routeProps.target.src;
            this.setState(item);
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Route path="/index" component={Container} />
                    <Route path="/search" render={(routeProps) => <Search {...routeProps} addBook={(e) => this.addBook(e)} />}
                    />} />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default main;