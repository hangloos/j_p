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
      categories: [],
      selectedCategories: [],
      filteredJobs: []
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

    updateJobs() {
      fetch('http://localhost:3000/api/jobs')
      .then(res => res.json())
      .then(jobs => this.setState({jobs}))
    }


  filterCategory(category,e) {
    debugger
    var selectedCategories = this.state.selectedCategories
    if (e.target.checked) {
      selectedCategories.push(category)
    } else {
      selectedCategories.splice(selectedCategories.indexOf(category), 1)
    }
      this.setState({selectedCategories: selectedCategories})

          if (selectedCategories.length === 0) {
            this.updateJobs()

          } else {

          var selectedJobs = []
          for(var i = 0; i < selectedCategories.length;i++){
            for(var j = 0; j < selectedCategories[i].jobs.length; j++) {
              if(selectedCategories.indexOf(selectedCategories[i].jobs[j]) === -1) {
              selectedJobs.push(selectedCategories[i].jobs[j])
              } else {
                console.log("job already exists")
              }
            }
          }
          this.setState({jobs: selectedJobs})
        }
      
    }

  render() {
    console.log(this.state)

    return (
      <div className="App">
      <Navbar {...navbar} />
      <Jobs filterCategory={this.filterCategory.bind(this)} jobs={this.state.jobs} categories={this.state.categories} />
      
      </div>
    );
  }
}

export default App;

