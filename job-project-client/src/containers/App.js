import React, { Component } from 'react';
import './App.css';
import Jobs from '../components/Jobs';
import NavbarApp from './Navbar';
import Layout from './Layout';

const jobs = [
  {
    title: 'Accountant',
    description: "hey this is an accountant role"
  },
  {
    title: 'Developer',
    description: "develop in this role"
  }
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavbarApp />
        <Jobs jobs={jobs} />
        <Layout />
      </div>
    );
  }
}

export default App;
