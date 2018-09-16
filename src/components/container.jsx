import React, { Component } from 'react';
import Readsdisplay from './readsdisplay';
import Navbar from './navbar';
import Wanttoread from './wanttoread';
import Currentlyreading from './currentlyreading';
import Footer from './footer';

//This container class will hold the three shelves
class container extends Component {
    state = {}
    render() {
        return (
            <div id="containerinfo">
                <Navbar />
                <Readsdisplay />
                <Wanttoread />
                <Currentlyreading />
                <Footer />
            </div>
        );
    }
}

export default container;