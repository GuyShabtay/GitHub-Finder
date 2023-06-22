import './App.css';
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div>
      <Navbar />
      <div className="container">
      <Users />
      </div>
      </div>
    );
  }
}

export default App;
