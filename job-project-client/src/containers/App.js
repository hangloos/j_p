import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import Jobs from '../components/Jobs'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
=======
import Jobs from '../components/Jobs';
import NavbarApp from './Navbar';
import Layout from './Layout';
>>>>>>> 30519c14e509f13d015f20842cbf1fa2db9014bc

const jobs = [
  {
    title: 'Accountant',
    description: "hey this is an accountant role",
    url: "www.google.com",
    company: "Google"
  },
  {
    title: 'Developer',
    description: "develop in this role",
    url: "wwww.yahoo.com",
    company: "Yahoo"
  }, {
    title: 'Developer',
    description: "develop in this role",
    url: "wwww.yahoo.com",
    company: "Yahoo"
  }
]

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

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
      <Navbar {...navbar} />
       <Jobs key={jobs.title} jobs={jobs} />
=======
      <div className="container">
        <NavbarApp />
        <Jobs jobs={jobs} />
        <Layout />
>>>>>>> 30519c14e509f13d015f20842cbf1fa2db9014bc
      </div>
    );
  }
}

export default App;


// https://bootsnipp.com/snippets/kEvrW

// <Grid>
//     <Row className="show-grid">
//       <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
//       <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
//     </Row>
// </Grid>
