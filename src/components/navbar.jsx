import React, { Component } from 'react';

class navbar extends Component {
    state = { input: "" }

    //This will get the value of the search term and input it into the state
    handleChange = (e) => {
        this.setState({ input: e.target.value });
    };

    //This button will get the value and conduct the search
    handleButton = () => {
        alert(this.state.input);
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
                <a className="navbar-brand" href="#"><h1 className="titleheading">My Bookreads</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange}></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleButton}>Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default navbar;