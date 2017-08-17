import React, { Component } from 'react';


// import Grid from 'react-bootstrap/lib/Grid';
// import Row from 'react-bootstrap/lib/Row';
// import Col from 'react-bootstrap/lib/Col';



export default class Layout extends React.Component {
  render() {
    return (
    <div>
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <h2>Job Categories</h2>
          <label>Category Name <input type="radio" /></label>
          <label>Category Name <input type="radio" /></label>
          <label>Category Name <input type="radio" /></label>
          <label>Category Name <input type="radio" /></label>
          <label>Category Name <input type="radio" /></label>
          <label>Category Name <input type="radio" /></label>
          <label>Category Name <input type="radio" /></label>
        <h2>Job Type</h2>
          <label>Full-time <input type="radio" /></label>
          <label>Part-time <input type="radio" /></label>
          <label>Category Name <input type="radio" /></label>
          



      </div>

    </div>

    );
  }
}