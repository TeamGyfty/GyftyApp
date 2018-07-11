import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import { Input, TextArea, FormBtn } from '../../components/Form';

class Main extends Component {
  state = {
    requests: [],
    name: '',
    title: '',
    body: ''
  };

 
  saveRequest = requestData => {
    if (this.state.title && this.state.name && this.state.body) {
      API.saveRequest({
        title: this.state.title,
        name: this.state.name,
        body: this.state.body
      })
        .then(res => this.loadRequests())
        console.log("request saved")

        .catch(err => console.log(err));
    }
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.body) {
      this.saveRequest();
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-3">
            <Jumbotron>
              <h1>Find a Gyft!</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.body}
                onChange={this.handleInputChange}
                name="description"
                placeholder="What are you looking for? (required)"
              />
              <button className="btn btn-primary requests" style={{float: "right"}} onClick={() => this.saveRequest({
                name: this.state.name,
                title: this.state.title, 
                body: this.state.body
              })}> Submit Request </button> 
            </form>
          </Col>
    
        </Row>
      </Container>
    );
  }
}

export default Main;