import React, { Component } from 'react';
import './App.css';
import Jobs from '../components/Jobs'
import Navbar from '../components/Navbar'
import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

var navbar = {};
navbar.brand = 
  {linkTo: "#", text: "Eric Loos Project"};
navbar.links = [
  {linkTo: "#", text: "Home"},
  // {linkTo: "#", text: "Link 2"},
  // {dropdown: true, text: "Dropdown", links: [
  //   {linkTo: "#", text: "Dropdown Link 1"},
  //   {linkTo: "#", text: "Dropdown Link 2", active: true}
  // ]}
];

const API_URL = process.env.JOB_APP_API_URL;

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      jobs: [],
      categories: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/jobs')
      .then(res => res.json())
      .then(jobs => this.setState({jobs}))

    fetch('http://localhost:3000/api/categories')
      .then(res => res.json())
      .then(categories => this.setState({categories}))
    }

  render() {
    console.log(this.state)

    return (
      <div className="App">
      <Navbar {...navbar} />
      <Jobs jobs={this.state.jobs} />
      <Layout categories={this.state.categories} />
      </div>
    );
  }
}

export default App;

