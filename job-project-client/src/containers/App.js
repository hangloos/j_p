import React, { Component } from 'react';
import './App.css';
import Jobs from '../components/Jobs'
import Navbar from '../components/Navbar'
import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

// var all_jobs = [
//   {
//     title: 'Accountant',
//     description: "hey this is an accountant role and twejlkjfklsjfkljslkjdskljsfkldfjfklsjfkjfkslfjklsfjklfjklfjlfkjfjlkfjjlskfjksjfkdfjslfkjdfksjflkdsjfklsjflkjskdjfdksljfklfjskfjsklfjsklfjslkjskfljflksjfdsjlsfjksfjkldfjsdlkfjkdfsjfkjflksjflkdsjflksjfklsjfksljfklsdfjslfjlkfjsfkdsljfksdjf",
//     url: "www.google.com",
//     company: "Google",
//     category: "Technology",
//     type: "Full-time"
//   },
//   {
//     title: 'Developer',
//     description: "develop in this role",
//     url: "wwww.yahoo.com",
//     company: "Yahoo",
//     category: "Technology",
//     type: "Full-time"
//   }, {
//     title: 'Developer',
//     description: "develop in this role",
//     url: "wwww.yahoo.com",
//     company: "Yahoo",
//     category: "Technology",
//     type: "Full-time"
//   }
// ]

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
      jobs: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/jobs')
      .then(res => res.json())
      .then(jobs => this.setState({jobs}))

    // axios.get('http://localhost:3000/api/jobs').then(res => this.setState({
    //   all_jobs: res.data
    // }));
    }

  render() {
    console.log(this.state)

    return (
      <div className="App">
      <Navbar {...navbar} />
      <Jobs jobs={this.state.jobs} />
      <Layout />
      </div>
    );
  }
}

export default App;

