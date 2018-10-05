import React, { Component } from 'react';
import '../search.css'
import queryString from 'query-string'

class search extends Component {
    state = {}


    check = () => {
        const parsed = queryString.parse(this.props.location.search);
        console.log(parsed);
    }

    render() {
        return (
            <div id="searchfield">
                {this.check()}
            </div>
        );
    }
}

export default search;