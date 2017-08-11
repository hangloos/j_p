import React, { Component } from 'react';


import Button from 'react-bootstrap/lib/Button';
import Navbar from 'react-bootstrap/lib/Navbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';



export default class NavbarApp extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Eric Loos's Job Board</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Form pullLeft>
                <FormGroup>
                  <FormControl type="text" placeholder="Search" />
                </FormGroup>
                {' '}
                <Button type="submit">Search</Button>
              </Navbar.Form>
            </Navbar.Collapse>
          </Navbar>
        </div>

    );
  }
}