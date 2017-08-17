import React, { Component } from 'react';


import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';



export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>test</Col>
            <Col xs={6} md={4}>test</Col>
          </Row>
        </Grid>
      </div>

    );
  }
}