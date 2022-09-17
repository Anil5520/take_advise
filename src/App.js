import React from 'react';
// import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    console.log('component did mount');
  }



  render() {
    return (
      <h1>Advise App</h1>
    );
  }
}

export default App;