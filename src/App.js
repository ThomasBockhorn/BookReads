import React, {
  Component
} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Readsdisplay from './components/readsdisplay';

class App extends Component {
  render() {
    return ( <
      React.Fragment >
      <
      Navbar / >
      <
      Readsdisplay / >
      <
      /React.Fragment>
    );
  }
}

export default App;